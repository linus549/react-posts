import styled from "styled-components";
import useToggle from "hooks/useToggle";
import LikeToggleButton from "components/Post/Info/LikeToggleButton";
import SaveToggleButton from "components/Post/Info/SaveToggleButton";

function Buttons({ points }) {
  const [isLiked, toggleIsLiked] = useToggle(false);
  const [isSaved, toggleIsSaved] = useToggle(false);

  if (isLiked) {
    points++;
  }

  return (
    <div>
      <p>
        <Points>{points}</Points>
        {points === 1 ? " point" : " points"}
      </p>

      <ButtonContainer>
        <LikeToggleButton primary on={isLiked} onToggle={toggleIsLiked} />
        <SaveToggleButton primary on={isSaved} onToggle={toggleIsSaved} />
      </ButtonContainer>
    </div>
  );
}

const Points = styled.span`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

export default Buttons;
