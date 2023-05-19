import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "GlobalStyle";
import { breakpoints } from "config";
import Header from "components/Header/Header";

function App() {
  const scrollWrapperRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(
    function scrollToTop() {
      scrollWrapperRef.current.scroll(0, 0);
    },
    [pathname]
  );

  return (
    <>
      <GlobalStyle />
      <Header />

      <ScrollWrapper ref={scrollWrapperRef}>
        <Content>
          <Outlet />
        </Content>
      </ScrollWrapper>
    </>
  );
}

const ScrollWrapper = styled.div`
  height: calc(100dvh - var(--header-height));
  overflow: auto scroll;
  padding: var(--spacing-md) 0;

  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${breakpoints.LARGE};
  min-height: 100%;
  margin: 0 auto;

  & > * {
    width: 100%;
  }
`;

export default App;
