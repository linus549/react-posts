import { useState, useRef } from "react";
import styled from "styled-components";
import useValidateInput from "hooks/useValidateInput";
import ValidationMessage from "components/common/ValidationMessage";

function Checkbox({
  id,
  name,
  checked,
  className,
  onChange,
  children,
  ...props
}) {
  const [validationMessage, setValidationMessage] = useState("");
  const inputElementRef = useRef(null);
  const delayValidate = useValidateInput(inputElementRef, setValidationMessage);

  function handleChange(e) {
    onChange(e);
    delayValidate(e);
  }

  return (
    <StyledValidatedCheckbox id={`input-${id}`} className={className}>
      <InputWrapper>
        <Input
          ref={inputElementRef}
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          aria-describedby={`${id}-validation`}
          onChange={handleChange}
          onBlur={delayValidate}
          {...props}
        />

        <label htmlFor={id}>{children}</label>
      </InputWrapper>

      {validationMessage !== "" && (
        <ValidationMessage id={id} message={validationMessage} />
      )}
    </StyledValidatedCheckbox>
  );
}

const StyledValidatedCheckbox = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: var(--spacing-sm);
`;

export default Checkbox;
