import { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Box from "components/styled/Box";
import PostPlaceholder from "components/Post/PostPlaceholder";
import VisuallyHidden from "components/styled/VisuallyHidden";
import FetchErrorMessage from "components/common/FetchErrorMessage";
import Content from "components/Post/Content";
import Info from "components/Post/Info/Info";
import Comments from "components/Post/Comments";
import { fetchJSON, timer } from "helpers";
import { LOADER_DEMO_DELAY, USER_COUNT, breakpoints } from "config";
import { posts as placeholderPosts, users as placeholderUsers } from "data";

function Post() {
  const { postId } = useParams();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    data: {},
  });

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const loaderDemoTimer = timer(LOADER_DEMO_DELAY);
      dispatch({ type: "init" });

      const [postFetch, usersFetch] = await Promise.allSettled([
        fetchJSON(`https://hn.algolia.com/api/v1/items/${postId}`),
        fetchJSON(
          `https://randomuser.me/api/?results=${USER_COUNT}&inc=picture,name&noinfo`
        ),
      ]);

      let post;
      let users;
      let isError = false;

      if (postFetch.status === "fulfilled") {
        post = postFetch.value;
      } else {
        post = placeholderPosts.hits[0];
        isError = true;
      }

      if (usersFetch.status === "fulfilled" && !usersFetch.value.error) {
        users = usersFetch.value;
      } else {
        users = placeholderUsers;
      }

      await loaderDemoTimer;

      if (!ignore) {
        dispatch({
          type: isError ? "failure" : "success",
          payload: { post, users },
        });
      }
    }

    fetchData();

    return () => {
      ignore = true;
    };
  }, [postId]);

  useEffect(
    function setTitle() {
      if (state.data?.post?.title) {
        document.title = state.data.post.title + " | Posts";
      }
    },
    [state.data]
  );

  return (
    <>
      {state.isLoading ? (
        <Article>
          <VisuallyHidden>Loading...</VisuallyHidden>
          <PostPlaceholder />
        </Article>
      ) : (
        <>
          {state.isError && <FetchErrorMessage />}

          <Article>
            <Content data={state.data} />
            <Info data={state.data} />
          </Article>

          {state.data.post.children.length > 0 && (
            <Comments data={state.data} />
          )}
        </>
      )}
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
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

const Article = styled(Box).attrs({
  as: "article",
})`
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);

  @media (max-width: ${breakpoints.LARGE_SUB}) {
    margin-top: calc(var(--spacing-md) * -1);
    border-radius: 0;
  }

  @media (min-width: ${breakpoints.LARGE}) {
    display: flex;
  }
`;

export default Post;
