import { forwardRef } from "react";
import styled from "styled-components";
import useToggle from "hooks/useToggle";
import InputField from "components/styled/InputField";
import { ReactComponent as ShowIcon } from "assets/icons/eye-fill.svg";
import { ReactComponent as HideIcon } from "assets/icons/eye-slash-fill.svg";

const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const buttonLabel = showPassword ? "Hide password" : "Show password";

  function handleClick() {
    toggleShowPassword();
  }

  return (
    <StyledPasswordInputField>
      <Input {...props} ref={ref} type={showPassword ? "text" : "password"} />

      <Button
        title={buttonLabel}
        aria-label={buttonLabel}
        disabled={props.disabled}
        onClick={handleClick}
      >
        <IconWrapper>{showPassword ? <HideIcon /> : <ShowIcon />}</IconWrapper>
      </Button>
    </StyledPasswordInputField>
  );
});

const StyledPasswordInputField = styled.div`
  display: flex;
`;

const Input = styled(InputField)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const Button = styled.button.attrs({
  type: "button",
})`
  color: inherit;
  background-color: inherit;
  border: var(--divider-width) solid var(--divider-alt);
  border-radius: var(--border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 var(--spacing-sm);
`;

const IconWrapper = styled.div`
  width: 1.25rem;
`;

export default PasswordInput;
