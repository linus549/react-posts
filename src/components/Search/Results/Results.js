import { useRef, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useValidateSearchParams from "hooks/useValidateSearchParams";
import usePagination from "hooks/usePagination";
import { sortingProperty, sortingOrder, RESULTS_PER_PAGE } from "config";
import { getCompareFunction } from "helpers";
import { placeholderText } from "data";
import styled from "styled-components";
import Header from "components/Search/Results/Header";
import Preview from "components/Preview/Preview";
import Pagination from "components/common/Pagination";

function Results({ results }) {
  const searchParams = useSearchParams()[0];
  const resultsHeaderRef = useRef(null);
  const shouldScroll = useRef(false);
  const property =
    searchParams.get("sortby") ?? Object.values(sortingProperty)[0];
  const order = searchParams.get("order") ?? Object.values(sortingOrder)[0];

  const sortedResults = useMemo(
    () => [...results.hits].sort(getCompareFunction(property, order)),
    [results.hits, property, order]
  );

  const [
    currentPage,
    setCurrentPage,
    currentStart,
    currentEnd,
    pageCount,
    currentResults,
  ] = usePagination(
    sortedResults,
    RESULTS_PER_PAGE,
    resultsHeaderRef,
    shouldScroll.current
  );

  useValidateSearchParams();

  useEffect(
    function resetPagination() {
      setCurrentPage(1);
      shouldScroll.current = false;
    },
    [results, setCurrentPage]
  );

  function handlePaginationClick() {
    shouldScroll.current = true;
  }

  return (
    <>
      <Header
        ref={resultsHeaderRef}
        start={currentStart}
        end={currentEnd}
        resultCount={results.hits.length}
        query={results.query}
      />

      {results.hits.length > 0 && (
        <>
          <List>
            {currentResults.map((result, i) => (
              <Result key={result.objectID}>
                <Preview
                  postId={result.objectID}
                  title={result.title}
                  author={result.author}
                  date={result.created_at}
                  text={placeholderText}
                  points={result.points}
                  commentCount={result.num_comments}
                  imageUrl={`https://picsum.photos/400/250?random=${i}`}
                />
              </Result>
            ))}
          </List>

          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            onClick={handlePaginationClick}
          />
        </>
      )}
    </>
  );
}

const List = styled.ol`
  padding: var(--spacing-lg) 0;
`;

const Result = styled.li`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-md);
  }
`;

export default Results;
