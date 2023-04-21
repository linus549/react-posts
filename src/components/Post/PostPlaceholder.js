import styled from "styled-components";
import { breakpoints } from "config";
import Placeholder from "components/styled/Placeholder";
import Avatar from "components/common/Avatar";
import placeholderImage from "assets/images/placeholder-post.jpg";
import placeholderAvatar from "assets/images/placeholder-avatar.png";

function PostPlaceholder() {
  return (
    <>
      <Content>
        <Image src={placeholderImage} alt="" width="2000" height="1000" />

        <TextContainer>
          <Placeholder $width="60%" $height="1.5rem" $marginBottom="1rem" />
          <Placeholder $width="70%" /> <Placeholder $width="28%" />
          <Placeholder $width="40%" /> <Placeholder $width="50%" />
          <Placeholder $width="80%" />
        </TextContainer>
      </Content>

      <Info>
        <SectionContainer>
          <Section>
            <Author>
              <AuthorAvatar src={placeholderAvatar} />

              <AuthorTextContainer>
                <Placeholder $width="7rem" $marginBottom="0.5rem" />
                <Placeholder
                  $color="var(--text-alt)"
                  $width="6rem"
                  $marginBottom="0"
                />
              </AuthorTextContainer>
            </Author>
          </Section>

          <Section>
            <ButtonContainer>
              <Button />
              <Button />
            </ButtonContainer>
          </Section>
        </SectionContainer>
      </Info>
    </>
  );
}

const Content = styled.div`
  flex-basis: 70%;
`;

const Image = styled.img`
  width: 100%;
  opacity: 0.5;
`;

const TextContainer = styled.div`
  border-bottom: var(--divider-width) solid var(--divider);
  margin: 0 var(--spacing-md);
  padding: var(--spacing-lg) 0;

  & > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.SMALL}) {
    margin: 0 var(--spacing-lg);
  }

  @media (min-width: ${breakpoints.LARGE}) {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Info = styled.div`
  flex-basis: 30%;

  @media (min-width: ${breakpoints.LARGE}) {
    border-left: var(--divider-width) solid var(--divider);
  }
`;

const SectionContainer = styled.div`
  @media (min-width: ${breakpoints.MEDIUM}) and (max-width: ${breakpoints.LARGE_SUB}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: var(--divider-width) solid var(--divider);
    margin: 0 var(--spacing-lg);
  }
`;

const Section = styled.div`
  border-bottom: var(--divider-width) solid var(--divider);
  margin: 0 var(--spacing-lg);
  padding: var(--spacing-lg) 0;

  @media (min-width: ${breakpoints.MEDIUM}) and (max-width: ${breakpoints.LARGE_SUB}) {
    border-bottom: none;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled(Avatar)`
  margin-right: var(--spacing-sm);
  opacity: 0.5;
`;

const AuthorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const Button = styled.div`
  flex: 1;
  height: 2.25rem;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  opacity: 0.75;
`;

export default PostPlaceholder;
