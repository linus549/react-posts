import { useReducer, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import random from "lodash/random";
import styled from "styled-components";
import FetchErrorMessage from "components/common/FetchErrorMessage";
import Form from "components/Search/Form";
import Results from "components/Search/Results/Results";
import { fetchJSON, timer } from "helpers";
import { RESULT_COUNT_MIN, RESULT_COUNT_MAX, LOADER_DEMO_DELAY } from "config";
import { results as placeholderResults } from "data";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";

function Search() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const searchParams = useSearchParams()[0];
  const searchInput = searchParams.get("query");

  useSetDocumentTitle(
    searchInput
      ? `Search results for "${searchInput}" | Posts`
      : "Search | Posts"
  );

  useEffect(() => {
    if (!searchInput) {
      dispatch({ type: "reset" });
      return;
    }

    let ignore = false;

    async function fetchData() {
      const loaderDemoTimer = timer(LOADER_DEMO_DELAY);
      let data;
      let isError = false;
      dispatch({ type: "init" });

      try {
        data = await fetchJSON(
          `https://hn.algolia.com/api/v1/search?query=${searchInput}&tags=story&hitsPerPage=${random(
            RESULT_COUNT_MIN,
            RESULT_COUNT_MAX
          )}`
        );
      } catch (error) {
        data = placeholderResults;
        isError = true;
      }

      await loaderDemoTimer;

      if (!ignore) {
        dispatch({
          type: isError ? "failure" : "success",
          payload: { query: searchInput, hits: data.hits },
        });
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [searchInput]);

  return (
    <>
      <Form isLoading={state.isLoading} />
      {state.isError && <SearchFetchErrorMessage />}

      {searchInput && state.data.query !== "" && (
        <Results results={state.data} />
      )}
    </>
  );
}

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: { query: "", hits: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return INITIAL_STATE;

    case "init":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "success":
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case "failure":
      return {
        isLoading: false,
        isError: true,
        data: action.payload,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const SearchFetchErrorMessage = styled(FetchErrorMessage)`
  margin-bottom: 0;
`;

export default Search;
