import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useEscapeKey from "hooks/useEscapeKey";
import { breakpoints } from "config";
import SignInButton from "components/Header/SignInButton/SignInButton";
import Navigation from "components/Header/Navigation";

function Menu({ open, firstMenuItemRef, lastMenuItemRef, onClose }) {
  useEscapeKey(open, onClose);

  useEffect(
    function manageResizeListener() {
      if (open) {
        window.addEventListener("resize", onClose);
      } else {
        window.removeEventListener("resize", onClose);
      }

      return () => {
        window.removeEventListener("resize", onClose);
      };
    },
    [open, onClose]
  );

  useEffect(
    function setFocusOnOpen() {
      if (open) {
        firstMenuItemRef.current.focus();
      }
    },
    [open, firstMenuItemRef]
  );

  function handleClick(e) {
    if (e.target.nodeName !== "A" && e.target.nodeName !== "BUTTON") {
      return;
    }

    if (open) {
      onClose();
    }
  }

  return (
    <StyledMenu hide={!open} onClick={handleClick}>
      <Navigation column={open} firstMenuItemRef={firstMenuItemRef} />

      <Container>
        <SignInButton />

        <RegistrationLink ref={lastMenuItemRef} to="registration">
          Register
        </RegistrationLink>
      </Container>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    flex-direction: column;
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    height: calc(100% - var(--header-height));
    overflow: auto;
    background-color: var(--foreground);
    padding: var(--spacing-xl) var(--spacing-lg);

    ${({ hide }) => hide && "display: none"};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.MEDIUM_SUB}) {
    order: -1;
    justify-content: center;
    width: 100%;
    border-bottom: var(--divider-width) solid var(--divider);
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    margin-left: auto;
    margin-right: var(--spacing-sm);
  }
`;

const RegistrationLink = styled(Link)`
  color: var(--text-alt);
  text-decoration: none;
  padding: 0 var(--spacing-md);

  &:hover,
  &:active {
    color: var(--primary);
  }
`;

export default Menu;
