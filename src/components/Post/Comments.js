import { useRef } from "react";
import styled from "styled-components";
import usePagination from "hooks/usePagination";
import { COMMENTS_PER_PAGE, COMMENT_MAX_POINTS, breakpoints } from "config";
import Box from "components/styled/Box";
import Comment from "components/Post/Comment/Comment";
import Pagination from "components/common/Pagination";

function Comments({ data }) {
  const { post, users } = data;
  const headingElementRef = useRef(null);
  const shouldScroll = useRef(false);
  const userIndex = useRef(1);

  const [
    currentPage,
    setCurrentPage,
    currentStart,
    currentEnd,
    pageCount,
    currentComments,
  ] = usePagination(
    post.children,
    COMMENTS_PER_PAGE,
    headingElementRef,
    shouldScroll.current
  );

  const commentCount = getCommentCount(post);
  const commentText = commentCount === 1 ? " comment" : " comments";
  const commentList = [];

  for (const comment of currentComments) {
    const user = users.results[userIndex.current];
    userIndex.current++;

    if (userIndex.current === users.results.length) {
      userIndex.current = 1;
    }

    commentList.push(
      <RootComment key={comment.id}>
        <Comment
          avatarUrl={user.picture.large}
          name={`${user.name.first} ${user.name.last}`}
          handle={comment.author}
          date={comment.created_at}
          points={Math.floor(Math.random() * (COMMENT_MAX_POINTS + 1))}
          replies={comment.children}
          htmlContent={comment.text}
          users={users}
        />
      </RootComment>
    );
  }

  function handlePaginationClick() {
    shouldScroll.current = true;
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Heading>
            <Count>{commentCount}</Count>
            {commentText} and replies in total
          </Heading>

          <Heading ref={headingElementRef}>
            {currentStart}-{currentEnd} of <Count>{post.children.length}</Count>
            {commentText}
          </Heading>
        </Header>
      </Wrapper>

      <List>{commentList}</List>

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onClick={handlePaginationClick}
      />
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    padding: 0 var(--spacing-md);
  }
`;

const Header = styled.div`
  padding: var(--spacing-lg) 0;
  border-bottom: var(--divider-width) solid var(--divider);
`;

const Heading = styled.h2`
  text-align: center;
  font-size: var(--font-size-md);
  font-weight: normal;
  margin-bottom: var(--spacing-md);
  scroll-margin-top: var(--spacing-md);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Count = styled.span`
  font-weight: bold;
`;

const List = styled.ol`
  max-width: ${breakpoints.SMALL};
  padding: var(--spacing-lg) 0;
`;

const RootComment = styled(Box).attrs({
  as: "li",
})`
  padding: var(--spacing-md) var(--spacing-sm);

  &:not(:last-of-type) {
    margin-bottom: var(--spacing-md);
  }

  @media (max-width: ${breakpoints.SMALL_SUB}) {
    border-radius: 0;
  }

  @media (min-width: ${breakpoints.SMALL}) {
    padding: var(--spacing-md);
  }
`;

function getCommentCount(comment) {
  let count = 0;

  for (let i = 0; i < comment.children.length; i++) {
    count += 1 + getCommentCount(comment.children[i]);
  }

  return count;
}

export default Comments;
