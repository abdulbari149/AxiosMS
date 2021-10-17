import { useMediaQuery } from "../hooks"
import { useTheme } from "styled-components"
export default function mediaScreens() {
    const { breakPoints } = useTheme();

    const large = useMediaQuery(`(min-width: ${breakPoints.large.min}px)`);
  
    const medium = useMediaQuery(
      `(max-width: ${breakPoints.medium.max}px) and (min-width: ${breakPoints.medium.min}px)`
    );
    const small = useMediaQuery(
    );
  
    const x_small = useMediaQuery(`(max-width: ${breakPoints.x_small.max}px)`);
  
    const mediaScreens = { large, medium, small, x_small };
}