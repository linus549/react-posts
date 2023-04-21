import styled from "styled-components";
import { range } from "helpers";
import { breakpoints } from "config";
import { ReactComponent as PreviousIcon } from "assets/icons/chevron-left.svg";
import { ReactComponent as NextIcon } from "assets/icons/chevron-right.svg";

function Pagination({ pageCount, currentPage, setCurrentPage, onClick }) {
  const paginationItems = getPaginationItems(currentPage, pageCount).map(
    (item, i) => {
      let component;

      if (Number(item) === currentPage) {
        component = <CurrentPage>{item}</CurrentPage>;
      } else if (item === ELLIPSIS) {
        component = <Item>{ELLIPSIS}</Item>;
      } else {
        component = (
          <ButtonItem data-page={item} onClick={handleClick}>
            {item}
          </ButtonItem>
        );
      }

      return <li key={i}>{component}</li>;
    }
  );

  function handleClick(e) {
    setCurrentPage(Number(e.target.dataset.page));
    onClick();
  }

  function handlePrevClick() {
    setCurrentPage((currentPage) => currentPage - 1);
    onClick();
  }

  function handleNextClick() {
    setCurrentPage((currentPage) => currentPage + 1);
    onClick();
  }

  if (pageCount <= 1) {
    return null;
  }

  return (
    <StyledPagination aria-label="pagination">
      <List>
        <li>
          <ButtonItem disabled={currentPage === 1} onClick={handlePrevClick}>
            <IconWrapper>
              <PreviousIcon />
            </IconWrapper>
          </ButtonItem>
        </li>

        {paginationItems}

        <li>
          <ButtonItem
            disabled={currentPage === pageCount}
            onClick={handleNextClick}
          >
            <IconWrapper>
              <NextIcon />
            </IconWrapper>
          </ButtonItem>
        </li>
      </List>
    </StyledPagination>
  );
}

const ELLIPSIS = "...";

function getPaginationItems(currentPage, pageCount, adjacentCount = 1) {
  const FIRST = 1;
  const LAST = pageCount;
  // first + last + current + (ellipsis * 2) = 5
  const MAX_ITEMS = 5 + adjacentCount * 2;
  // MAX_ITEMS - first - last - ellipsis - (adjacentCount * 2)
  const TO_MAINTAIN_MAX = 2;

  if (pageCount <= MAX_ITEMS) {
    return range(FIRST, LAST);
  }

  const leftmostAdjacent = Math.max(currentPage - adjacentCount, FIRST);
  const rightmostAdjacent = Math.min(currentPage + adjacentCount, LAST);
  const shouldShowLeftEllipsis = leftmostAdjacent > FIRST + 1;
  const shouldShowRightEllipsis = rightmostAdjacent < LAST - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftRange = range(FIRST, FIRST + TO_MAINTAIN_MAX + adjacentCount * 2);
    return [...leftRange, ELLIPSIS, LAST];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightRange = range(
      LAST - (TO_MAINTAIN_MAX + adjacentCount * 2),
      LAST
    );
    return [FIRST, ELLIPSIS, ...rightRange];
  }

  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const midRange = range(leftmostAdjacent, rightmostAdjacent);
    return [FIRST, ELLIPSIS, ...midRange, ELLIPSIS, LAST];
  }
}

const StyledPagination = styled.nav`
  padding: 0 var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    padding: 0 var(--spacing-md);
  }
`;

const Item = styled.div`
  text-align: center;
  background-color: var(--foreground);
  min-width: 3.2rem;
  height: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: var(--divider-width) solid var(--divider);
`;

const ButtonItem = styled(Item).attrs({
  as: "button",
  type: "button",
})``;

const CurrentPage = styled(Item)`
  color: var(--primary-text);
  background-color: var(--primary);
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  line-height: normal;
  border-top: var(--divider-width) solid var(--divider);
  padding: var(--spacing-lg) 0;

  li:not(:first-child) ${Item} {
    border-left: none;
  }

  li:first-child ${Item} {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  li:last-child ${Item} {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  li:hover ${ButtonItem}:not(:disabled) {
    background-color: var(--foreground-alt);
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
`;

export default Pagination;
