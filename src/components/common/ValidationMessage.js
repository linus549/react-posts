import styled from "styled-components";
import { ReactComponent as Icon } from "assets/icons/exclamation-circle-fill.svg";

function ValidationMessage({ id, message }) {
  return (
    <StyledValidationMessage>
      <ExclamationIcon />

      <div id={`${id}-validation`} role="alert">
        {message}
      </div>
    </StyledValidationMessage>
  );
}

const StyledValidationMessage = styled.div`
  display: flex;
  align-items: center;
  color: var(--validation-text);
  background-color: inherit;
  margin-top: var(--spacing-sm);
`;

const ExclamationIcon = styled(Icon)`
  flex-shrink: 0;
  width: 1.25rem;
  margin-right: var(--spacing-sm);
`;

export default ValidationMessage;
