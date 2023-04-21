import styled from "styled-components";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

function Header({ postId, author, date, title }) {
  return (
    <div>
      <Author>
        <AuthorItem>By {author}</AuthorItem>

        <AuthorItem>
          <time dateTime={date}>
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </time>
        </AuthorItem>
      </Author>

      <h2>
        <PreviewLink to={`/post/${postId}`}>{title}</PreviewLink>
      </h2>
    </div>
  );
}

const Author = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: var(--font-size-xs);
  color: var(--text-alt);
  margin-bottom: var(--spacing-xs);
`;

const AuthorItem = styled.div`
  margin-right: var(--spacing-xs);
`;

const PreviewLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--primary);
  }
`;

export default Header;
