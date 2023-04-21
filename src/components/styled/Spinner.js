import styled, { keyframes, css } from "styled-components";

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div.attrs((props) => ({
  role: "status",
  $size: props.$size || "1.2rem",
  $borderWidth: props.$borderWidth || "0.2rem",
  $color: props.$color || "currentColor",
  $gap: props.$gap || "transparent",
  $variant: props.$variant || "solid",
  $duration: props.$duration || "0.8s",
}))(
  (props) => css`
    flex: none;
    display: inline-block;
    width: ${props.$size};
    height: ${props.$size};
    vertical-align: calc(${props.$size} / 8 * -1);
    border: ${props.$borderWidth} ${props.$variant} ${props.$color};
    border-right-color: ${props.$gap};
    border-radius: 50%;
    animation: ${props.$duration} linear infinite ${spinner};
  `
);

export default Spinner;
