import { forwardRef } from "react";
import styled, { css } from "styled-components";
import Spinner from "components/styled/Spinner";
import VisuallyHidden from "components/styled/VisuallyHidden";

const Button = forwardRef(({ primary, isLoading, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      type={props.type || "button"}
      disabled={isLoading}
      $loading={isLoading}
      $primary={primary}
      {...props}
    >
      {isLoading ? (
        <>
          <VisuallyHidden>Loading...</VisuallyHidden>
          <Spinner />
        </>
      ) : (
        props.children
      )}
    </StyledButton>
  );
});

const StyledButton = styled.button(
  ({ $loading, $primary }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    line-height: 1.2;
    color: inherit;
    background-color: transparent;
    border: 1px solid currentColor;
    border-radius: var(--border-radius);
    padding: var(--spacing-sm) var(--spacing-md);
    transition: background-color 0.1s linear;

    ${$loading &&
    css`
      &:disabled {
        cursor: default;
      }
    `}

    ${$primary &&
    css`
      color: var(--primary-text);
      background-color: var(--primary);
      border-color: var(--primary);

      &:hover:not(:disabled),
      &:active:not(:disabled) {
        background-color: var(--primary-alt);
        border-color: var(--primary-alt);
      }
    `}

    svg {
      flex-shrink: 0;
    }
  `
);

export default Button;
