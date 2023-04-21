import styled from "styled-components";
import useToggle from "hooks/useToggle";
import { ReactComponent as Icon } from "assets/icons/bookmark.svg";
import { ReactComponent as FilledIcon } from "assets/icons/bookmark-fill.svg";

function SaveButton() {
  const [isActivated, toggleIsActivated] = useToggle(false);

  function handleClick(e) {
    e.stopPropagation();
    toggleIsActivated();
  }

  return (
    <StyledSaveButton $activated={isActivated} onClick={handleClick}>
      <IconWrapper>{isActivated ? <FilledIcon /> : <Icon />}</IconWrapper>
      {isActivated ? "Saved" : "Save"}
    </StyledSaveButton>
  );
}

const StyledSaveButton = styled.button.attrs({
  type: "button",
})`
  display: inline-flex;
  align-items: center;
  color: inherit;
  background-color: inherit;
  border: none;

  ${({ $activated }) => $activated && "color: var(--primary)"};

  &:hover:not(:disabled) {
    color: var(--primary);
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
  margin-right: var(--spacing-sm);
`;

export default SaveButton;
