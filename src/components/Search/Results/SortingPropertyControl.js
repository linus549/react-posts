import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { sortingProperty } from "config";

function SortingPropertyControl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const property =
    searchParams.get("sortby") ?? Object.values(sortingProperty)[0];

  function handleChange(e) {
    setSearchParams(
      {
        ...Object.fromEntries(searchParams.entries()),
        sortby: e.target.value,
      },
      { replace: true }
    );
  }

  return (
    <label>
      <Label>Sort by:</Label>

      <select value={property} onChange={handleChange}>
        {Object.entries(sortingProperty).map(([property, id]) => (
          <option key={id} value={id}>
            {capitalize(property)}
          </option>
        ))}
      </select>
    </label>
  );
}

const Label = styled.span`
  font-weight: bold;
  margin-right: var(--spacing-sm);
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

export default SortingPropertyControl;
