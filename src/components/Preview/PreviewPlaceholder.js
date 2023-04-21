import styled from "styled-components";
import { breakpoints } from "config";
import Box from "components/styled/Box";
import Placeholder from "components/styled/Placeholder";
import image from "assets/images/placeholder-preview.jpg";

function PreviewPlaceholder() {
  return (
    <StyledPreviewPlaceholder>
      <Points />

      <Container>
        <Content>
          <Text>
            <Placeholder
              $color="var(--text-alt)"
              $width="40%"
              $height="0.85rem;"
            />
            <Placeholder
              $width="75%"
              $height="2rem"
              $marginBottom="var(--spacing-md)"
            />
            <Placeholder $width="90%" $marginBottom="var(--spacing-md)" />
          </Text>

          <Image src={image} alt="placeholder" width="400" height="250" />
        </Content>
      </Container>
    </StyledPreviewPlaceholder>
  );
}

const StyledPreviewPlaceholder = styled(Box)`
  display: flex;
  padding: var(--spacing-md);

  @media (max-width: ${breakpoints.LARGE_SUB}) {
    border-radius: 0;
  }
`;

const Points = styled.div`
  width: 3.5rem;
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

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin-right: var(--spacing-md);
  }
`;

const Image = styled.img`
  width: 12rem;
  height: 7.5rem;
  border-radius: var(--border-radius);
  margin-left: auto;
  opacity: 0.5;

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    margin-left: 0;
  }
`;

export default PreviewPlaceholder;
