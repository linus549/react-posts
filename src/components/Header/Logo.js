import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Icon } from "assets/icons/chat-left-fill.svg";

function Logo() {
  return (
    <StyledLogo to="/">
      <LogoIcon />
      Posts
    </StyledLogo>
  );
}

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: var(--font-size-md);
  font-weight: bold;
  text-decoration: none;
  color: var(--text);
  margin-right: var(--spacing-xl);

  &:hover,
  &:active {
    color: var(--text);
  }
`;

const LogoIcon = styled(Icon)`
  width: 1rem;
  color: var(--primary);
  margin-right: var(--spacing-xs);
`;

export default Logo;
