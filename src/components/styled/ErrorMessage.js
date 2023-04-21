import styled from "styled-components";
import { breakpoints } from "config";

const ErrorMessage = styled.div.attrs({
  role: "alert",
})`
  color: var(--warning-text);
  background-color: var(--warning);
  max-width: ${breakpoints.SMALL};
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);

  a,
  a:hover,
  a:active {
    color: inherit;
  }

  @media (min-width: ${breakpoints.SMALL}) {
    border-radius: var(--border-radius);
  }
`;

export default ErrorMessage;
