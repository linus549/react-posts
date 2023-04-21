import styled from "styled-components";
import { breakpoints } from "config";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";
import { ReactComponent as MailIcon } from "assets/icons/envelope.svg";

function Share({ title, url }) {
  const shareItems = [
    {
      id: "Facebook",
      url: "https://www.facebook.com/",
      icon: <FacebookIcon />,
    },
    {
      id: "Twitter",
      url: "https://twitter.com/",
      icon: <TwitterIcon />,
    },
    {
      id: "Instagram",
      url: "https://www.instagram.com/",
      icon: <InstagramIcon />,
    },
    {
      id: "E-mail",
      url: `mailto:?subject=${title}&body=${url}`,
      icon: <MailIcon />,
    },
  ];

  return (
    <StyledShare>
      <Title>Share</Title>

      <List>
        {shareItems.map((item) => (
          <ListItem key={item.id}>
            <Link href={item.url}>
              <IconWrapper>{item.icon}</IconWrapper>
              {item.id}
            </Link>
          </ListItem>
        ))}
      </List>
    </StyledShare>
  );
}

const StyledShare = styled.div`
  /* used with margins to not remove padding on top/bottom links */
  --link-padding: var(--spacing-sm);
`;

const Title = styled.h2`
  font-size: var(--font-size-md);
  margin-bottom: calc(var(--spacing-md) - var(--link-padding));
`;

const List = styled.ul`
  margin-bottom: calc(var(--link-padding) * -1);

  @media (max-width: ${breakpoints.LARGE_SUB}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  @media (max-width: ${breakpoints.LARGE_SUB}) {
    margin-right: var(--spacing-xxl);
  }
`;

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer",
})`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-alt);
  padding: var(--link-padding) 0;

  &:hover {
    color: var(--text);

    svg {
      color: var(--primary-alt);
    }
  }

  svg {
    color: var(--primary);
  }
`;

const IconWrapper = styled.div`
  width: 1.25rem;
  margin-right: var(--spacing-sm);
`;

export default Share;
