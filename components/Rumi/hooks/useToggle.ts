import { useEffect, useState } from "react";

export default function useToggle(initialState: boolean) {
  const [isActive, setIsActive] = useState(initialState);

  function toggle() {
    setIsActive(!isActive);
  }

  return { isActive, toggle };
}
