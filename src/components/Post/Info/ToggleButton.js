import styled from "styled-components";
import Button from "components/common/Button";

function ToggleButton({ on, icon, onToggle, children, ...props }) {
  return (
    <StyledToggleButton onClick={onToggle} {...props}>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </StyledToggleButton>
  );
}

const StyledToggleButton = styled(Button)`
  flex: 1;
  background-clip: padding-box;
  padding: calc(var(--spacing-sm) - 1px) calc(var(--spacing-md) - 1px);

  &:active:not(:disabled) {
    border-color: transparent;
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
  margin-right: var(--spacing-sm);
`;

export default ToggleButton;
