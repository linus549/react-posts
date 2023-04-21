import { Link } from "react-router-dom";
import styled from "styled-components";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";
import Button from "components/common/Button";
import { breakpoints } from "config";

function Start() {
  useSetDocumentTitle("Share and discuss with others | Posts");

  return (
    <StyledStart>
      <Title>
        Share and discuss
        <br />
        with others
      </Title>

      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ipsum
        hendrerit, convallis libero bibendum, mattis enim. Praesent fermentum
        lectus ac enim convallis feugiat. Aliquam quis magna eget sapien
        vulputate tristique.
      </Paragraph>

      <LinkContainer>
        <ButtonLink primary to="latest">
          See the latest posts
        </ButtonLink>

        <ButtonLink primary to="registration">
          Register an account
        </ButtonLink>
      </LinkContainer>
    </StyledStart>
  );
}

const StyledStart = styled.div`
  font-size: var(--font-size-md);
  text-align: center;
  max-width: ${breakpoints.SMALL};
  margin: auto;
  padding: var(--spacing-xl) var(--spacing-md);
`;

const Title = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
`;

const Paragraph = styled.p`
  margin-bottom: var(--spacing-lg);
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
`;

const ButtonLink = styled(Button).attrs({
  forwardedAs: Link,
  type: undefined,
})`
  text-decoration: none;
  font-weight: bold;
  padding: var(--spacing-md) var(--spacing-lg);

  &:hover,
  &:active {
    color: var(--primary-text);
  }
`;
export default Start;
