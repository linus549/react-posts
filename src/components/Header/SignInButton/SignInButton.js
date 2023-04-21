import { useState, useRef, useCallback } from "react";
import Button from "components/common/Button";
import SignInModal from "components/Header/SignInButton/SignInModal";

function SignInButton() {
  const [showModal, setShowModal] = useState(false);
  const buttonRef = useRef(null);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    buttonRef.current.focus();
  }, []);

  function handleSignInClick() {
    setShowModal(true);
  }

  return (
    <>
      <Button ref={buttonRef} primary onClick={handleSignInClick}>
        Sign in
      </Button>

      <SignInModal show={showModal} onClose={handleModalClose} />
    </>
  );
}

export default SignInButton;
