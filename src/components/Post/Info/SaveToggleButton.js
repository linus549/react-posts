import ToggleButton from "components/Post/Info/ToggleButton";
import { ReactComponent as SaveIcon } from "assets/icons/bookmark.svg";
import { ReactComponent as FilledSaveIcon } from "assets/icons/bookmark-fill.svg";

function LikeToggleButton({ on, onToggle, children, ...props }) {
  return (
    <ToggleButton
      on={on}
      icon={on ? <FilledSaveIcon /> : <SaveIcon />}
      onToggle={onToggle}
      {...props}
    >
      {on ? "Saved" : "Save"}
    </ToggleButton>
  );
}

export default LikeToggleButton;
