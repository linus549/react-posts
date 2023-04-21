import { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/styled/Title";
import VisuallyHidden from "components/styled/VisuallyHidden";
import Preview from "components/Preview/Preview";
import PreviewPlaceholder from "components/Preview/PreviewPlaceholder";
import FetchErrorMessage from "components/common/FetchErrorMessage";
import { LOADER_DEMO_DELAY } from "config";
import { fetchJSON, timer } from "helpers";
import { placeholderText, posts as placeholderPosts } from "data";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";

function Latest() {
  const [state, setState] = useState({
    isLoading: true,
    isError: false,
    data: { hits: [] },
  });

  useSetDocumentTitle("Latest posts | Posts");

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const loaderDemoTimer = timer(LOADER_DEMO_DELAY);
      let data;
      let isError = false;

      try {
        data = await fetchJSON(
          "https://hn.algolia.com/api/v1/search?tags=front_page"
        );
      } catch (error) {
        data = placeholderPosts;
        isError = true;
      }

      await loaderDemoTimer;

      if (!ignore) {
        setState({
          isLoading: false,
          isError,
          data,
        });
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <Title $spacing="xl" $topSpacing>
        Latest Posts
      </Title>

      {state.isLoading ? (
        <>
          <VisuallyHidden>Loading...</VisuallyHidden>
          <ul>{placeholderList}</ul>
        </>
      ) : (
        <>
          {state.isError && <FetchErrorMessage />}

          <ul>
            {state.data.hits.map((hit, i) => (
              <Result key={hit.objectID}>
                <Preview
                  postId={hit.objectID}
                  title={hit.title}
                  author={hit.author}
                  date={hit.created_at}
                  text={placeholderText}
                  points={hit.points}
                  commentCount={hit.num_comments}
                  imageUrl={`https://picsum.photos/400/250?random=${i}`}
                />
              </Result>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

const Result = styled.li`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-md);
  }
`;

const placeholderList = [];

for (let i = 0; i < 4; i++) {
  placeholderList.push(
    <Result key={i}>
      <PreviewPlaceholder />
    </Result>
  );
}

export default Latest;
