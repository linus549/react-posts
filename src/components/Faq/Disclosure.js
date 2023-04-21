import styled from "styled-components";
import useToggle from "hooks/useToggle";
import Container from "components/styled/Container";
import { ReactComponent as Icon } from "assets/icons/chevron-down.svg";

function Disclosure({ title, children }) {
  const [isExpanded, toggleIsExpanded] = useToggle(false);

  function handleClick() {
    toggleIsExpanded();
  }

  return (
    <StyledExpandableSection $size="medium">
      <Title>
        <Button onClick={handleClick}>
          <ButtonText>{title}</ButtonText>
          <ChevronIcon $rotated={isExpanded} />
        </Button>
      </Title>

      {isExpanded && <Panel>{children}</Panel>}
    </StyledExpandableSection>
  );
}

const StyledExpandableSection = styled(Container)`
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: start;
  width: 100%;
  background-color: inherit;
  border: none;
`;

const ButtonText = styled.div`
  font-weight: normal;
  margin-right: var(--spacing-md);
`;

const ChevronIcon = styled(Icon)`
  flex-shrink: 0;
  width: 1.5rem;
  margin-left: auto;
  will-change: transform;
  transition: transform 0.4s ease-in-out;

  ${({ $rotated }) => $rotated && "transform: rotate(180deg)"};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Panel = styled.div`
  border-top: var(--divider-width) solid var(--divider);
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default Disclosure;
