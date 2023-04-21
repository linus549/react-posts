import { sanitize } from "dompurify";
import styled from "styled-components";
import useToggle from "hooks/useToggle";
import { COMMENT_MAX_POINTS, breakpoints } from "config";
import IconButton from "components/styled/IconButton";
import Avatar from "components/common/Avatar";
import Header from "components/Post/Comment/Header";
import Buttons from "components/Post/Comment/Buttons";
import { ReactComponent as Icon } from "assets/icons/caret-down-fill.svg";

function Comment({
  avatarUrl,
  name,
  handle,
  date,
  points,
  replyingTo,
  replies,
  htmlContent,
  users,
}) {
  const [isExpanded, toggleIsExpanded] = useToggle(false);
  const replyList = [];

  const expandButtonText = `${isExpanded ? "Hide" : "View"} ${replies.length} ${
    replies.length === 1 ? "reply" : "replies"
  }`;

  for (let i = 0; i < replies.length; i++) {
    const currentUser =
      users.results[Math.floor(Math.random() * users.results.length)];

    if (replies[i].text) {
      replyList.push(
        <Reply key={replies[i].id}>
          <Comment
            avatarUrl={currentUser.picture.large}
            name={currentUser.name.first + " " + currentUser.name.last}
            handle={replies[i].author}
            date={replies[i].created_at}
            points={Math.floor(Math.random() * (COMMENT_MAX_POINTS + 1))}
            replyingTo={handle}
            replies={replies[i].children}
            htmlContent={replies[i].text}
            users={users}
          />
        </Reply>
      );
    }
  }

  function handleClick() {
    toggleIsExpanded();
  }

  return (
    <>
      <CurrentComment>
        <CommentAvatar
          imageUrl={avatarUrl}
          imageSize="128"
          name={name}
          loading="lazy"
        />

        <Container>
          <Header
            avatarUrl={avatarUrl}
            name={name}
            handle={handle}
            date={date}
            replyingTo={replyingTo}
          />

          <Content
            dangerouslySetInnerHTML={{ __html: sanitize(htmlContent) }}
          />

          <Buttons points={points} />

          {replies.length > 0 && (
            <ExpandButton onClick={handleClick}>
              <CaretIcon $rotated={isExpanded} />
              {expandButtonText}
            </ExpandButton>
          )}
        </Container>
      </CurrentComment>

      {isExpanded && <Replies>{replyList}</Replies>}
    </>
  );
}

const CurrentComment = styled.article`
  display: flex;
`;

const CommentAvatar = styled(Avatar)`
  margin-right: var(--spacing-sm);

  @media (max-width: ${breakpoints.SMALL_SUB}) {
    display: none;
  }
`;

const Container = styled.div`
  flex: 1;
  overflow-x: auto;
`;

const Content = styled.div`
  margin-bottom: var(--spacing-md);

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ExpandButton = styled(IconButton)`
  color: var(--primary);
  margin-top: var(--spacing-md);
`;

const CaretIcon = styled(Icon)`
  width: 1rem;
  margin-right: var(--spacing-sm);

  ${({ $rotated }) => $rotated && "transform: rotate(180deg)"};
`;

const Replies = styled.ol`
  border-left: var(--divider-width) solid var(--divider);
  border-bottom-left-radius: var(--border-radius);
`;

const Reply = styled.li`
  padding-top: var(--spacing-md);
  padding-left: var(--spacing-xs);
  border-bottom-left-radius: var(--border-radius);

  &:last-of-type {
    padding-bottom: var(--spacing-md);
    border-bottom: var(--divider-width) solid var(--divider);
  }

  @media (min-width: ${breakpoints.SMALL}) {
    padding-left: var(--spacing-md);
  }
`;

export default Comment;
