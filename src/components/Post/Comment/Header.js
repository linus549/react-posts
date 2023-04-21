import styled from "styled-components";
import Avatar from "components/common/Avatar";
import { breakpoints } from "config";

function Header({ avatarUrl, name, handle, date, replyingTo }) {
  const formattedDate = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new window.Date(date));

  return (
    <StyledHeader>
      <CommentAvatar
        imageUrl={avatarUrl}
        imageSize="128"
        name={name}
        loading="lazy"
      />

      <div>
        <User>
          <Name>{name}</Name> @{handle}
        </User>

        <Date>
          <time dateTime={date}>{formattedDate}</time>
        </Date>

        {replyingTo && <div>Replying to @{replyingTo}</div>}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-alt);
  margin-bottom: var(--spacing-md);

  @media (min-width: ${breakpoints.SMALL}) {
    margin-bottom: var(--spacing-xs);
  }
`;

const CommentAvatar = styled(Avatar)`
  margin-right: var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    display: none;
  }
`;

const User = styled.div`
  @media (min-width: ${breakpoints.SMALL}) {
    display: inline;

    &::after {
      content: " ";
    }
  }
`;

const Name = styled.span`
  font-weight: bold;
  color: var(--text);
`;

const Date = styled.span`
  white-space: nowrap;

  @media (min-width: ${breakpoints.SMALL}) {
    &::before {
      content: "· ";
    }
  }
`;

export default Header;
