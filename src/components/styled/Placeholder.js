import styled, { keyframes, css } from "styled-components";

const wave = keyframes`
  100% {
    mask-position: -200% 0%;
  }
`;

const Placeholder = styled.div.attrs((props) => ({
  $color: props.$color || "currentColor",
  $width: props.$width || "100%",
  $height: props.$height || "1rem",
  $marginBottom: props.$marginBottom || "0.5rem",
}))(
  (props) => css`
    display: inline-block;
    width: ${props.$width};
    height: ${props.$height};
    background-color: ${props.$color};
    margin-bottom: ${props.$marginBottom};
    opacity: 0.5;
    cursor: wait;
    mask-image: linear-gradient(
      130deg,
      #000 55%,
      rgba(0, 0, 0, 0.8) 75%,
      #000 95%
    );
    mask-size: 200% 100%;
    animation: ${wave} 2s linear infinite;
  `
);

export default Placeholder;
