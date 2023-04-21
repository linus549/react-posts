import { useEffect } from "react";

function useSetDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useSetDocumentTitle;
