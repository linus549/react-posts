import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { sortingProperty, sortingOrder } from "config";
import Container from "components/styled/Container";
import Title from "components/styled/Title";
import InputField from "components/styled/InputField";
import Button from "components/common/Button";
import { ReactComponent as Icon } from "assets/icons/search.svg";

function Form({ isLoading }) {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({
      query: value,
      sortby: searchParams.get("sortby") ?? Object.values(sortingProperty)[0],
      order: searchParams.get("order") ?? Object.values(sortingOrder)[0],
    });
  }

  return (
    <StyledForm $size="small" role="search" onSubmit={handleSubmit}>
      <Title>Search</Title>

      <InputContainer>
        <SearchInputField
          type="search"
          value={value}
          placeholder={`Title or Author, e.g. "javascript"`}
          autoComplete="off"
          required
          pattern=".*\S.*"
          disabled={isLoading}
          aria-label="Search"
          onChange={handleChange}
        />

        <SearchButton
          type="submit"
          primary
          isLoading={isLoading}
          aria-label="Search"
        >
          <SearchIcon />
        </SearchButton>
      </InputContainer>
    </StyledForm>
  );
}

const StyledForm = styled(Container).attrs({
  as: "form",
})`
  margin-bottom: var(--spacing-lg);
`;

const InputContainer = styled.div`
  display: flex;
`;

const SearchInputField = styled(InputField)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SearchButton = styled(Button)`
  min-width: 2.90625rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: var(--spacing-sm);
`;

const SearchIcon = styled(Icon)`
  width: 1.25rem;
`;

export default Form;
