/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { USERNAME_HELP, PASSWORD_HELP } from "config";
import Title from "components/styled/Title";
import InputField from "components/common/InputField";
import Checkbox from "components/common/Checkbox";
import Button from "components/common/Button";

function Form({ isLoading, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    termsOfService: false,
  });

  const formRef = useRef(null);
  const timeoutIdRef = useRef(null);

  useEffect(function clearTimeoutOnUnmount() {
    return () => clearTimeout(timeoutIdRef.current);
  }, []);

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
    } else {
      timeoutIdRef.current = setTimeout(scrollToTopmostInvalid, 0);
    }
  }

  function scrollToTopmostInvalid() {
    const topmostInvalid = formRef.current.querySelector(":invalid");

    if (topmostInvalid) {
      topmostInvalid.closest(`#input-${topmostInvalid.id}`).scrollIntoView();
    }
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit}>
      <Title>Register Your Account</Title>

      <RegistrationInputField
        id="name"
        label="Name"
        name="name"
        value={inputValues.name}
        required
        disabled={isLoading}
        onChange={handleChange}
      />

      <RegistrationInputField
        id="username"
        label="Username"
        name="username"
        value={inputValues.username}
        title={USERNAME_HELP.substring(0, USERNAME_HELP.length - 1)}
        help={USERNAME_HELP}
        minLength="3"
        maxLength="16"
        pattern="\S*"
        required
        disabled={isLoading}
        onChange={handleChange}
      />

      <RegistrationInputField
        type="email"
        id="email"
        label="Email"
        name="email"
        value={inputValues.email}
        help={
          <>
            Your email address will <strong>not</strong> be shown to others.
          </>
        }
        required
        disabled={isLoading}
        onChange={handleChange}
      />

      <RegistrationInputField
        type="password"
        id="password"
        label="Password"
        name="password"
        value={inputValues.password}
        title={PASSWORD_HELP.substring(0, PASSWORD_HELP.length - 1)}
        help={PASSWORD_HELP}
        minLength="8"
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        required
        disabled={isLoading}
        onChange={handleChange}
      />

      <Checkbox
        id="terms-of-service"
        name="termsOfService"
        checked={inputValues.termsOfService}
        required
        disabled={isLoading}
        onChange={handleChange}
      >
        I have read and accept the <a href="#">Terms of Service</a>.
      </Checkbox>

      <SubmitButton type="submit" primary isLoading={isLoading}>
        Register
      </SubmitButton>
    </form>
  );
}

const RegistrationInputField = styled(InputField)`
  margin-bottom: var(--spacing-xl);
  scroll-margin-top: var(--spacing-md);
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

export default Form;
