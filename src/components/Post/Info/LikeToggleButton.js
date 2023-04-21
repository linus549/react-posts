import ToggleButton from "components/Post/Info/ToggleButton";
import { ReactComponent as LikeIcon } from "assets/icons/star.svg";
import { ReactComponent as FilledLikeIcon } from "assets/icons/star-fill.svg";

function LikeToggleButton({ on, onToggle, children, ...props }) {
  return (
    <ToggleButton
      on={on}
      icon={on ? <FilledLikeIcon /> : <LikeIcon />}
      onToggle={onToggle}
      {...props}
    >
      {on ? "Liked" : "Like"}
    </ToggleButton>
  );
}

export default LikeToggleButton;
