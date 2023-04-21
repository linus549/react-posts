import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navigation({ column, firstMenuItemRef }) {
  return (
    <nav>
      <List $column={column}>
        <li>
          <Link to="latest" ref={firstMenuItemRef}>
            Latest
          </Link>
        </li>

        <li>
          <Link to="search">Search</Link>
        </li>

        <li>
          <Link to="faq">FAQ</Link>
        </li>
      </List>
    </nav>
  );
}

const List = styled.ul`
  display: flex;

  ${({ $column }) => $column && "flex-direction: column"};
`;

const Link = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--text-alt);
  border-bottom: calc(var(--spacing-md) * 0.2) solid transparent;
  padding: var(--spacing-md);
  padding-bottom: calc(var(--spacing-md) * 0.8);

  &:hover,
  &.active {
    color: var(--text);
    border-bottom-color: var(--primary);
  }
`;

export default Navigation;
