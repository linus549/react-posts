import styled from "styled-components";
import { breakpoints } from "config";
import Author from "components/Post/Info/Author";
import Buttons from "components/Post/Info/Buttons";
import Share from "components/Post/Info/Share";

function Info({ data }) {
  const { post, users } = data;

  return (
    <StyledInfo>
      <ResponsiveSectionContainer>
        <ResponsiveSection>
          <Author
            date={post.created_at}
            avatarUrl={users.results[0].picture.large}
            name={`${users.results[0].name.first} ${users.results[0].name.last}`}
            handle={post.author}
          />
        </ResponsiveSection>

        <ResponsiveSection>
          <Buttons points={post.points} />
        </ResponsiveSection>
      </ResponsiveSectionContainer>

      <Section>
        <Share title={post.title} url={post.url} />
      </Section>
    </StyledInfo>
  );
}

const StyledInfo = styled.div`
  flex-basis: 30%;

  @media (min-width: ${breakpoints.LARGE}) {
    border-left: var(--divider-width) solid var(--divider);
  }
`;

const Section = styled.div`
  border-bottom: var(--divider-width) solid var(--divider);
  margin: 0 var(--spacing-lg);
  padding: var(--spacing-lg) 0;
`;

const ResponsiveSection = styled(Section)`
  @media (min-width: ${breakpoints.MEDIUM}) and (max-width: ${breakpoints.LARGE_SUB}) {
    border-bottom: none;
  }
`;

const ResponsiveSectionContainer = styled.div`
  @media (min-width: ${breakpoints.MEDIUM}) and (max-width: ${breakpoints.LARGE_SUB}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: var(--divider-width) solid var(--divider);
    margin: 0 var(--spacing-lg);
  }
`;

export default Info;
