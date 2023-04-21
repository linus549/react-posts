import { createGlobalStyle } from "styled-components";
import RobotoWoff2 from "assets/fonts/roboto-v27-latin-regular.woff2";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Roboto";
  src: url(${RobotoWoff2}) format("woff2");
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  overflow-wrap: break-word;
}

html {
  color-scheme: light;
  --header-height: 3.45625rem;
  --font-size-xs: 0.85rem;
  --font-size-sm: 1rem;
  --font-size-md: 1.25rem;
  --font-size-lg: 1.5rem;
  --font-size-xl: 3rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-xxl: 3rem;
  --border-radius: 0.25rem;
  --divider-width: 1px;
  --focus-outline-width: 3px;
  --focus-outline-offset: 2px;
  --text: #3c3c3c;
  --text-alt: #747474;
  --background: #e6e6e6;
  --foreground: #fff;
  --foreground-alt: #ededed;
  --divider: #ccc;
  --divider-alt: #929292;
  --primary: #5c8e81;
  --primary-alt: #496f65;
  --primary-text: #fff;
  --warning: #b00020;
  --warning-text: #fff;
  --validation-text: #b00020;
}

html.dark {
  color-scheme: dark;
  --text: #e4e8ec;
  --text-alt: #bac4ce;
  --background: #121212;
  --foreground: #2d2d2d;
  --foreground-alt: #3d3d3d;
  --divider: rgba(255, 255, 255, 0.12);
  --divider-alt: #808080;
  --primary: #03dac5;
  --primary-alt: #1efce5;
  --primary-text: #000;
  --warning: #cf6679;
  --warning-text: #000;
  --validation-text: #D67D8E;
}

html.dark img {
  filter: brightness(0.8) contrast(1.2);
}

body {
  font-family: "Roboto", sans-serif;
  font-size: var(--font-size-sm);
  line-height: 1.5;
  color: var(--text);
  background-color: var(--background);
  accent-color: var(--primary);
  height: 100vh;
}

input,
button,
select,
textarea,
optgroup {
  font: inherit;
}

button {
  line-height: normal;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: normal;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

ul,
ol {
  list-style: none;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  overflow: visible;
}

[hidden] {
  display: none !important;
}

button:not(:disabled),
[role="button"]:not(:disabled) {
  cursor: pointer;
}

button:disabled,
[role="button"]:disabled,
input:disabled {
  cursor: not-allowed;
}

abbr[title] {
  cursor: help;
}

label {
  display: inline-block;
}

pre {
  overflow: auto;
}

a {
  color: var(--primary);
}

a:hover,
a:active {
  color: var(--primary-alt);
}

/* fallback if :focus-visible is not supported */
*:focus {
  outline: var(--focus-outline-width) solid var(--primary);
  outline-offset: var(--focus-outline-offset);
}

/* if :focus-visible is supported */
*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: var(--focus-outline-width) solid var(--primary);
  outline-offset: var(--focus-outline-offset);
}

::selection {
  color: var(--primary-text);
  background-color: var(--primary);
}

::-ms-reveal {
  display: none;
}

#app-root, #modal-root {
  isolation: isolate;
}
`;

export default GlobalStyle;
