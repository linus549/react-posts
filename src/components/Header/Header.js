import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { breakpoints } from "config";
import Box from "components/styled/Box";
import Logo from "components/Header/Logo";
import DarkThemeToggle from "components/Header/DarkThemeToggle";
import MenuButton from "components/Header/MenuButton";
import Menu from "components/Header/Menu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);
  const lastMenuItemRef = useRef(null);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
    menuButtonRef.current.focus();
  }, []);

  function handleKeyDown(e) {
    if (isMenuOpen) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === menuButtonRef.current) {
            e.preventDefault();
            lastMenuItemRef.current.focus();
          } else if (document.activeElement === firstMenuItemRef.current) {
            e.preventDefault();
            menuButtonRef.current.focus();
          }
        } else {
          if (document.activeElement === menuButtonRef.current) {
            e.preventDefault();
            firstMenuItemRef.current.focus();
          } else if (document.activeElement === lastMenuItemRef.current) {
            e.preventDefault();
            menuButtonRef.current.focus();
          }
        }
      }
    }
  }

  function handleMenuButtonClick() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <StyledHeader onKeyDown={handleKeyDown}>
      <Container>
        <Logo />

        <Menu
          open={isMenuOpen}
          firstMenuItemRef={firstMenuItemRef}
          lastMenuItemRef={lastMenuItemRef}
          onClose={handleMenuClose}
        />

        <ButtonContainer>
          <DarkThemeToggle />

          <MenuButton
            isMenuOpen={isMenuOpen}
            ref={menuButtonRef}
            onClick={handleMenuButtonClick}
          />
        </ButtonContainer>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled(Box).attrs({
  as: "header",
})`
  position: relative;
  z-index: 100;
  width: 100%;
  border-radius: 0;
  padding-left: var(--spacing-md);
  padding-right: var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    padding-right: var(--spacing-md);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: ${breakpoints.LARGE};
  height: var(--header-height);
  margin: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export default Header;
