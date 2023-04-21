import styled from "styled-components";
import Avatar from "components/common/Avatar";

function Author({ date, avatarUrl, name, handle }) {
  const formattedDate = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new window.Date(date));

  return (
    <div>
      <Date>
        Posted on <time dateTime={date}>{formattedDate}</time>
      </Date>

      <User>
        <AuthorAvatar imageUrl={avatarUrl} imageSize="128" name={name} />

        <div>
          <Name>{name}</Name>
          <Handle>@{handle}</Handle>
        </div>
      </User>
    </div>
  );
}

const Date = styled.p`
  color: var(--text-alt);
`;

const User = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
`;

const AuthorAvatar = styled(Avatar)`
  margin-right: var(--spacing-sm);
`;

const Name = styled.div`
  font-weight: bold;
`;

const Handle = styled.div`
  color: var(--text-alt);
`;

export default Author;
