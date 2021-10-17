import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "../hooks";

export default function useComputeStyles(styleArr) {
  const [styleProps, setStyleProps] = useState(styleArr);

  const getStyles = useCallback((element) => {
    if (!element) return;
    const styles = window.getComputedStyle(element, null);
    const calculatedStyles = {};
    for (let prop of styleProps) {
      calculatedStyles[prop] = styles[prop];
      console.log(styles[prop])
    }
    return calculatedStyles;
  }, []);

  return {getStyles};
}
