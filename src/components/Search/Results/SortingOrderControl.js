import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import RadioButton from "components/common/RadioButton";
import { sortingProperty, sortingOrder } from "config";

function SortingOrderControl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const property =
    searchParams.get("sortby") ?? Object.values(sortingProperty)[0];
  const order = searchParams.get("order") ?? Object.values(sortingOrder)[0];

  function handleChange(e) {
    setSearchParams(
      {
        ...Object.fromEntries(searchParams.entries()),
        order: e.target.value,
      },
      { replace: true }
    );
  }

  return (
    <StyledSortingOrderControl>
      <GroupLabel>Order:</GroupLabel>
      <RadioButton
        name="order"
        value={sortingOrder.ASCENDING}
        checked={order === sortingOrder.ASCENDING}
        label={property === "created_at" ? "Oldest first" : "Ascending"}
        onChange={handleChange}
      />

      <RadioButton
        name="order"
        value={sortingOrder.DESCENDING}
        checked={order === sortingOrder.DESCENDING}
        label={property === "created_at" ? "Newest first" : "Descending"}
        onChange={handleChange}
      />
    </StyledSortingOrderControl>
  );
}

const StyledSortingOrderControl = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: var(--spacing-sm);
  }
`;

const GroupLabel = styled.div`
  font-weight: bold;
`;

export default SortingOrderControl;
