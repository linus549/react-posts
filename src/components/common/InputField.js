import { forwardRef, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useValidateInput from "hooks/useValidateInput";
import Input from "components/styled/InputField";
import PasswordInput from "components/common/PasswordInput";
import ValidationMessage from "components/common/ValidationMessage";

const InputField = forwardRef(
  (
    { id, label, name, value, help = false, className, onChange, ...props },
    ref
  ) => {
    const [validationMessage, setValidationMessage] = useState("");
    const inputElementRef = useRef(null);

    const delayValidate = useValidateInput(
      inputElementRef,
      setValidationMessage
    );

    const InputComponent = props.type === "password" ? PasswordInput : Input;
    let ariaDescribedBy = `${id}-validation`;

    if (help) {
      ariaDescribedBy += ` ${id}-help`;
    }

    useEffect(
      function mergeRefs() {
        if (ref) {
          ref.current = inputElementRef.current;
        }
      },
      [ref]
    );

    return (
      <div id={`input-${id}`} className={className}>
        <Label htmlFor={id}>{label}</Label>

        <InputComponent
          ref={inputElementRef}
          id={id}
          name={name}
          value={value}
          aria-describedby={ariaDescribedBy}
          onChange={onChange}
          onBlur={delayValidate}
          {...props}
        />

        {help && <Help id={`${id}-help`}>{help}</Help>}

        {validationMessage !== "" && (
          <ValidationMessage id={id} message={validationMessage} />
        )}
      </div>
    );
  }
);

const Label = styled.label`
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
`;

const Help = styled.div`
  color: var(--text-alt);
  margin-top: var(--spacing-sm);
`;

export default InputField;
