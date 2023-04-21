import { useState, useCallback } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue((value) => !value), []);

  return [value, toggleValue];
}

export default useToggle;
