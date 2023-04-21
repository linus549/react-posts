import { forwardRef } from "react";
import styled from "styled-components";
import IconButton from "components/styled/IconButton";
import { breakpoints } from "config";
import { ReactComponent as MenuIcon } from "assets/icons/list.svg";
import { ReactComponent as CloseIcon } from "assets/icons/x-lg.svg";

const MenuButton = forwardRef(({ isMenuOpen, onClick }, ref) => {
  return (
    <StyledMenuButton
      ref={ref}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <IconWrapper>{isMenuOpen ? <CloseIcon /> : <MenuIcon />}</IconWrapper>
    </StyledMenuButton>
  );
});

const StyledMenuButton = styled(IconButton)`
  padding: var(--spacing-sm);

  @media (min-width: ${breakpoints.MEDIUM}) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 1.5rem;
`;

export default MenuButton;
