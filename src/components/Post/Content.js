import styled from "styled-components";
import { breakpoints } from "config";
import image from "assets/images/post.jpg";

function Content({ data }) {
  const { post } = data;

  return (
    <StyledContent>
      <Image src={image} alt="placeholder" width="2000" height="1000" />

      <TextContainer>
        <h1>{post.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem
          integer vitae justo eget. Sapien eget mi proin sed libero. Risus
          pretium quam vulputate dignissim suspendisse. Bibendum neque egestas
          congue quisque egestas diam in. Nulla porttitor massa id neque.
        </p>
        <p>
          Sit amet nisl purus in mollis nunc sed id. Suscipit adipiscing
          bibendum est ultricies integer. Erat nam at lectus urna duis convallis
          convallis tellus id. Eget sit amet tellus cras adipiscing enim eu
          turpis egestas. Varius quam quisque id diam.
        </p>

        {post.url && (
          <p>
            <Source>Source: </Source>
            <a href={post.url} target="_blank" rel="noreferrer">
              {post.url}
            </a>
          </p>
        )}
      </TextContainer>
    </StyledContent>
  );
}

const StyledContent = styled.div`
  flex-basis: 70%;
`;

const Image = styled.img`
  width: 100%;
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

const Source = styled.span`
  color: var(--text-alt);
  font-weight: bold;
`;

export default Content;
