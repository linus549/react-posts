import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "config";
import Box from "components/styled/Box";
import Header from "components/Preview/Header";
import Footer from "components/Preview/Footer";
import placeholderImage from "assets/images/preview.jpg";

function Preview({
  postId,
  title,
  author,
  date,
  text,
  points,
  commentCount,
  imageUrl,
}) {
  const [image, setImage] = useState(imageUrl);
  const navigate = useNavigate();

  function handleClick() {
    // don't treat highlighting like a click
    if (document.getSelection().toString() !== "") {
      return;
    }

    navigate(`/post/${postId}`, { replace: true });
  }

  function handleImageError() {
    setImage(placeholderImage);
  }

  return (
    <StyledPreview onClick={handleClick}>
      <Points>{points}</Points>

      <Container>
        <Content>
          <Text>
            <Header postId={postId} author={author} date={date} title={title} />
            <p>{text}</p>
          </Text>

          <Image
            src={image}
            alt="thumbnail"
            width="400"
            height="250"
            loading="lazy"
            onError={handleImageError}
          />
        </Content>

        <Footer points={points} commentCount={commentCount} />
      </Container>
    </StyledPreview>
  );
}

const StyledPreview = styled(Box).attrs({
  as: "article",
})`
  --footer-row-gap: var(--spacing-xs);
  display: flex;
  padding: var(--spacing-md);
  cursor: pointer;

  @media (max-width: ${breakpoints.LARGE_SUB}) {
    border-radius: 0;
  }

  @media (min-width: ${breakpoints.LARGE}) {
    will-change: transform;
    transition: box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
      box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.1);
      transform: scale(1.02);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Points = styled.div`
  align-self: center;
  font-size: var(--font-size-lg);
  min-width: 3.5rem;
  margin: 0 var(--spacing-lg);

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    display: none;
  }
`;

const Container = styled.div`
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: var(--footer-row-gap);

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  @media (min-width: ${breakpoints.MEDIUM}) {
    margin-right: var(--spacing-md);
  }
`;

const Image = styled.img`
  width: 12rem;
  height: 7.5rem;
  border-radius: var(--border-radius);
  margin-left: auto;

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    margin-left: 0;
    margin-bottom: var(--spacing-md);
  }
`;

export default Preview;
