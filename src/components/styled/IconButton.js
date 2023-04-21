import styled from "styled-components";

const IconButton = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  display: inline-flex;
  align-items: center;
  color: var(--text-alt);
  background-color: inherit;
  border: none;

  &:hover:not(:disabled),
  &:active:not(:disabled) {
    svg {
      color: var(--primary);
    }
  }
`;

export default IconButton;
