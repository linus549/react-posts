import { forwardRef } from "react";
import styled from "styled-components";
import { breakpoints } from "config";
import SortingPropertyControl from "components/Search/Results/SortingPropertyControl";
import SortingOrderControl from "components/Search/Results/SortingOrderControl";

const Header = forwardRef(({ start, end, resultCount, query }, ref) => {
  return (
    <StyledHeader ref={ref}>
      {resultCount > 0 ? (
        <Container>
          <Text>
            {start}-{end} of <Count>{resultCount}</Count> results for "{query}"
          </Text>

          <SortingControls>
            <SortingPropertyControl />
            <SortingOrderControl />
          </SortingControls>
        </Container>
      ) : (
        <NoResult>No results for "{query}"</NoResult>
      )}
    </StyledHeader>
  );
});

const StyledHeader = styled.div`
  padding: 0 var(--spacing-sm);

  @media (min-width: ${breakpoints.SMALL}) {
    padding: 0 var(--spacing-md);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: var(--spacing-lg) 0;
  border-bottom: var(--divider-width) solid var(--divider);

  @media (max-width: ${breakpoints.LARGE_SUB}) {
    flex-direction: column;
  }
`;

const Text = styled.h2`
  font-size: var(--font-size-md);
  font-weight: normal;
  margin-bottom: var(--spacing-md);

  @media (min-width: ${breakpoints.LARGE}) {
    margin-bottom: 0;
  }
`;

const SortingControls = styled.div`
  --row-gap: var(--spacing-xs);
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--row-gap) * -1) 0;

  & > * {
    margin: var(--row-gap) 0;
  }

  & > *:not(:last-child) {
    margin-right: var(--spacing-md);
  }
`;

const NoResult = styled(Text)`
  text-align: center;
  padding: var(--spacing-lg) 0;
`;

const Count = styled.span`
  font-weight: bold;
`;

export default Header;
