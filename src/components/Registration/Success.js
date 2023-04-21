import styled from "styled-components";
import Title from "components/styled/Title";
import { ReactComponent as Icon } from "assets/icons/check-circle.svg";

function Success() {
  return (
    <StyledSuccess>
      <CheckIcon />

      <div>
        <Title>Your account has been created.</Title>
        <Paragraph>
          An email with a confirmation link has been sent to you. Please follow
          the link as a final step to activate your account.
        </Paragraph>
      </div>
    </StyledSuccess>
  );
}

const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckIcon = styled(Icon)`
  width: 10rem;
  margin-bottom: var(--spacing-xl);
`;

const Paragraph = styled.p`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default Success;
