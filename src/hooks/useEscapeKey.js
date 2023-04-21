import { useEffect } from "react";

function useEscapeKey(isOn, handler) {
  useEffect(() => {
    if (isOn) {
      document.addEventListener("keydown", handleDocumentKeyDown);
    } else {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    }

    function handleDocumentKeyDown(e) {
      if (e.key === "Escape") {
        handler();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [isOn, handler]);
}

export default useEscapeKey;
