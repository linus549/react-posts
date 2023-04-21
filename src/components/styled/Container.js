import styled, { css } from "styled-components";
import Box from "components/styled/Box";
import { breakpoints } from "config";

const Container = styled(Box)(
  ({ $size }) => css`
    width: 100%;
    max-width: ${breakpoints[$size.toUpperCase()]};
    padding: var(--spacing-xl) var(--spacing-md);

    @media (max-width: ${breakpoints[$size.toUpperCase() + "_SUB"]}) {
      border-radius: 0;
    }

    @media (min-width: ${breakpoints[$size.toUpperCase()]}) {
      padding: var(--spacing-xl);
    }
  `
);

export default Container;
