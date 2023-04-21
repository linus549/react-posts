import { useRef, useEffect } from "react";
import { VALIDATION_MESSAGE_DELAY } from "config";

function useValidateInput(elementRef, setValidationMessage) {
  const timeoutIdRef = useRef(null);

  useEffect(
    function manageValidateListener() {
      const inputElement = elementRef.current;
      inputElement.addEventListener("validate", handleValidate);

      function handleValidate(e) {
        setValidationMessage(e.target.validationMessage);
      }

      return () => {
        inputElement.removeEventListener("validate", handleValidate);
      };
    },
    [elementRef, setValidationMessage]
  );

  useEffect(function clearTimeoutOnUnmount() {
    return () => clearTimeout(timeoutIdRef.current);
  }, []);

  function delayValidate(e) {
    timeoutIdRef.current = setTimeout(
      () => setValidationMessage(e.target.validationMessage),
      VALIDATION_MESSAGE_DELAY
    );
  }

  return delayValidate;
}

export default useValidateInput;
