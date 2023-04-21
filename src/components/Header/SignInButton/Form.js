import { useState, useRef } from "react";
import styled from "styled-components";
import InputField from "components/common/InputField";
import Checkbox from "components/common/Checkbox";

function Form({ id, usernameInputRef, disabled, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    staySignedIn: true,
  });

  const formRef = useRef(null);

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputValues((inputValues) => ({
      ...inputValues,
      [e.target.name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    for (const element of formRef.current.elements) {
      element.dispatchEvent(new CustomEvent("validate"));
    }

    if (e.target.checkValidity()) {
      onSubmit(inputValues);
    }
  }

  return (
    <StyledForm ref={formRef} id={id} noValidate onSubmit={handleSubmit}>
      <SignInInputField
        ref={usernameInputRef}
        id="username"
        label="Username"
        name="username"
        value={inputValues.username}
        required
        disabled={disabled}
        onChange={handleChange}
      />

      <SignInInputField
        id="password"
        label="Password"
        name="password"
        value={inputValues.password}
        type="password"
        required
        disabled={disabled}
        onChange={handleChange}
      />

      <Checkbox
        id="stay-signed-in"
        name="staySignedIn"
        checked={inputValues.staySignedIn}
        disabled={disabled}
        onChange={handleChange}
      >
        Stay signed in
      </Checkbox>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-bottom: var(--spacing-xl);
`;

const SignInInputField = styled(InputField)`
  margin-bottom: var(--spacing-lg);
`;

export default Form;
