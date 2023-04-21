import { useEffect } from "react";
import styled from "styled-components";
import IconButton from "components/styled/IconButton";
import { ReactComponent as DarkIcon } from "assets/icons/moon.svg";
import { ReactComponent as LightIcon } from "assets/icons/sun.svg";
import useLocalStorage from "hooks/useLocalStorage";

function DarkThemeToggle(props) {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(
    "isDarkTheme",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(
    function toggleDarkTheme() {
      if (isDarkTheme) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    },
    [isDarkTheme]
  );

  function handleClick() {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  }

  return (
    <StyledDarkThemeToggle
      {...props}
      title={(isDarkTheme ? "Light" : "Dark") + " theme"}
      aria-label={"Toggle a light or dark color theme"}
      onClick={handleClick}
    >
      <IconWrapper>{isDarkTheme ? <LightIcon /> : <DarkIcon />}</IconWrapper>
    </StyledDarkThemeToggle>
  );
}

const StyledDarkThemeToggle = styled(IconButton)`
  padding: var(--spacing-sm);
`;

const IconWrapper = styled.div`
  width: 1.5rem;
`;

const htmlElement = document.querySelector("html");

export default DarkThemeToggle;
