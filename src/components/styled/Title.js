import styled, { css } from "styled-components";

const Title = styled.h1.attrs((props) => ({
  $spacing: props.$spacing || "md",
}))`
  ${(props) => css`
    text-align: center;
    margin-bottom: var(--spacing-${props.$spacing});

    ${props.$topSpacing && `margin-top: var(--spacing-${props.$spacing})`};
  `}
`;

export default Title;
