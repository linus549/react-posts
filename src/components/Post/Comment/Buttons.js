import styled from "styled-components";
import { breakpoints } from "config";
import IconButton from "components/styled/IconButton";
import LikeButton from "components/Post/Comment/LikeButton";
import { ReactComponent as ReplyIcon } from "assets/icons/chat-left.svg";
import { ReactComponent as ReportIcon } from "assets/icons/exclamation-circle.svg";

function Buttons({ points }) {
  return (
    <StyledButtons>
      <LikeButton points={points} />

      <IconButton title="Reply" aria-label="Reply">
        <IconWrapper>
          <ReplyIcon />
        </IconWrapper>
      </IconButton>

      <IconButton title="Report" aria-label="Report">
        <IconWrapper>
          <ReportIcon />
        </IconWrapper>
      </IconButton>
    </StyledButtons>
  );
}

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: ${breakpoints.SMALL}) {
    justify-content: flex-start;

    & > *:not(last-child) {
      margin-right: var(--spacing-xxl);
    }
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
`;

export default Buttons;
