import styled from "styled-components";
import useToggle from "hooks/useToggle";
import IconButton from "components/styled/IconButton";
import { ReactComponent as Icon } from "assets/icons/star.svg";
import { ReactComponent as FilledIcon } from "assets/icons/star-fill.svg";

function LikeButton({ points }) {
  const [isActivated, toggleIsActivated] = useToggle(false);
  const label = isActivated ? "Unlike" : "Like";

  function handleClick() {
    toggleIsActivated();
  }

  if (isActivated) {
    points++;
  }

  return (
    <IconButton title={label} aria-label={label} onClick={handleClick}>
      <IconWrapper $primary={isActivated}>
        {isActivated ? <FilledIcon /> : <Icon />}
      </IconWrapper>
      {points > 0 && points}
    </IconButton>
  );
}

const IconWrapper = styled.div`
  width: 1rem;
  margin-right: var(--spacing-sm);
  ${({ $primary }) => $primary && "color: var(--primary)"};
`;

export default LikeButton;
