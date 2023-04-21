import styled from "styled-components";

function RadioButton(props) {
  return (
    <Label>
      <Input {...props} type="radio" />
      {props.label}
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: var(--spacing-xs);
`;

export default RadioButton;
