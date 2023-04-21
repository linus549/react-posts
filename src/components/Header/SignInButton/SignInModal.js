import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import uniqueId from "lodash/uniqueId";
import useFakePostRequest from "hooks/useFakePostRequest";
import Modal from "components/common/Modal";
import Form from "components/Header/SignInButton/Form";
import Button from "components/common/Button";
import ErrorMessage from "components/styled/ErrorMessage";

function SignInModal({ show, onClose }) {
  const [formKey, setFormKey] = useState(uniqueId());
  const usernameInputRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const [isLoading, requestResult, setRequest, resetRequest] =
    useFakePostRequest();

  function handleSubmit(formData) {
    setRequest({ data: formData, result: false });
  }

  function handleClose() {
    setFormKey(uniqueId());
    resetRequest();
    onClose();
  }

  return (
    <Modal
      title="Sign in"
      show={show}
      firstFocusRef={usernameInputRef}
      lastFocusRef={cancelButtonRef}
      onClose={handleClose}
    >
      {requestResult === false && (
        <ErrorMessage>Invalid username or password</ErrorMessage>
      )}

      <Form
        key={formKey}
        id="sign-in-form"
        usernameInputRef={usernameInputRef}
        disabled={isLoading}
        onSubmit={handleSubmit}
      />

      <Container>
        <CreateAccountLink to="registration" onClick={handleClose}>
          Create account
        </CreateAccountLink>

        <SignInButton
          type="submit"
          form="sign-in-form"
          primary
          isLoading={isLoading}
        >
          Sign in
        </SignInButton>

        <Button ref={cancelButtonRef} onClick={handleClose}>
          Cancel
        </Button>
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: var(--spacing-sm);
`;

const CreateAccountLink = styled(Link)`
  color: var(--text-alt);
  text-decoration: none;
  margin-right: auto;

  &:hover,
  &:active {
    color: var(--primary);
  }
`;

const SignInButton = styled(Button)`
  min-width: 5.096875rem;
`;

export default SignInModal;
