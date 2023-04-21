import styled from "styled-components";
import useFakePostRequest from "hooks/useFakePostRequest";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";
import { breakpoints } from "config";
import Container from "components/styled/Container";
import Form from "components/Registration/Form";
import Success from "components/Registration/Success";

function Registration() {
  const [isLoading, requestResult, setRequest] = useFakePostRequest();
  useSetDocumentTitle("Register your account | Posts");

  function handleSubmit(formData) {
    setRequest({ data: formData, result: true });
  }

  return (
    <Container $size="medium">
      <Wrapper>
        {requestResult ? (
          <Success />
        ) : (
          <Form isLoading={isLoading} onSubmit={handleSubmit} />
        )}
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  max-width: ${breakpoints.SMALL};
  margin: 0 auto;
`;

export default Registration;
