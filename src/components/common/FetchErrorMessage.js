import ErrorMessage from "components/styled/ErrorMessage";

function FetchErrorMessage(props) {
  return (
    <ErrorMessage {...props}>
      Could not fetch data from the Hacker News API. Placeholder data is used
      instead.
    </ErrorMessage>
  );
}

export default FetchErrorMessage;
