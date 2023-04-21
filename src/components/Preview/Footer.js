import styled from "styled-components";
import { breakpoints } from "config";
import SaveButton from "components/Preview/SaveButton";
import { ReactComponent as CommentIcon } from "assets/icons/chat-left.svg";
import { ReactComponent as PointsIcon } from "assets/icons/star.svg";

function Footer({ points, commentCount }) {
  return (
    <StyledFooter>
      <PointsFooterItem>
        <IconWrapper>
          <PointsIcon />
        </IconWrapper>
        {points}
      </PointsFooterItem>

      <FooterItem>
        <IconWrapper>
          <CommentIcon />
        </IconWrapper>
        {commentCount + (Number(commentCount) === 1 ? " comment" : " comments")}
      </FooterItem>

      <FooterItem>
        <SaveButton />
      </FooterItem>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  color: var(--text-alt);
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--footer-row-gap) * -1);
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin: var(--footer-row-gap);

  &:not(:last-child) {
    margin-right: var(--spacing-xl);
  }

  @media (min-width: ${breakpoints.MEDIUM}) {
    &:not(:last-child) {
      margin-right: var(--spacing-xxl);
    }
  }
`;

const PointsFooterItem = styled(FooterItem)`
  @media (min-width: ${breakpoints.MEDIUM}) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 1rem;
  margin-right: var(--spacing-sm);
`;

export default Footer;
