import ReactDOM from "react-dom";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import useEscapeKey from "hooks/useEscapeKey";
import Container from "components/styled/Container";

function Modal({
  title,
  show,
  firstFocusRef,
  lastFocusRef,
  onClose,
  children,
}) {
  useEscapeKey(show, onClose);

  useEffect(
    function setFocusOnShow() {
      if (show) {
        firstFocusRef.current.focus();
      }
    },
    [show, firstFocusRef]
  );

  function handleTransitionEnd(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (show) {
      firstFocusRef.current.focus();
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusRef.current) {
          e.preventDefault();
          lastFocusRef.current.focus();
        }
      } else {
        if (document.activeElement === lastFocusRef.current) {
          e.preventDefault();
          firstFocusRef.current.focus();
        }
      }
    }
  }

  function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClose();
  }

  return ReactDOM.createPortal(
    <StyledModal $show={show} onTransitionEnd={handleTransitionEnd}>
      <Backdrop $show={show} />

      <ScrollWrapper onClick={handleBackdropClick}>
        <Dialog $size="small" $show={show} onKeyDown={handleKeyDown}>
          <Title>{title}</Title>
          <div>{children}</div>
        </Dialog>
      </ScrollWrapper>
    </StyledModal>,
    document.getElementById("modal-root")
  );
}

const StyledModal = styled.div(
  ({ $show }) => css`
    visibility: hidden;
    transition: visibility 0.2s;

    ${$show &&
    css`
      visibility: visible;
      transition: visibility 0.3s;
    `};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
);

const Backdrop = styled.div(
  ({ $show }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.2s ease-in;

    ${$show &&
    css`
      opacity: 0.5;
      transition: opacity 0.3s ease-out;
    `}

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
);

const ScrollWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: auto;
  padding: var(--spacing-md) var(--spacing-sm);
`;

const Dialog = styled(Container)(
  ({ $show }) => css`
    margin: auto;
    border-radius: var(--border-radius);
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.2s ease-in, transform 0.2s ease-in;

    ${$show &&
    css`
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    `}

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
);

const Title = styled.h2`
  margin-bottom: var(--spacing-md);
`;

export default Modal;
