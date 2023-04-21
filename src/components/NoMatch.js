import { Link } from "react-router-dom";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";
import ErrorMessage from "components/styled/ErrorMessage";

function NoMatch() {
  useSetDocumentTitle("Page not found | Posts");

  return (
    <ErrorMessage>
      <p>Page not found.</p>
      <Link to="/">Return to index</Link>
    </ErrorMessage>
  );
}

export default NoMatch;
