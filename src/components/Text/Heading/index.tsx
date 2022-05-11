import { styled } from "../../../stitches.config";
import { pxToRem } from "../../../utils";

const Heading = styled('h6', {
  color: '$gray600',
  fontSize: '3rem',

  variants: {
    size: {
      sm: {
        maxWidth: `${pxToRem("240")}rem`
      },
      md: {
        maxWidth: `${pxToRem("480")}rem`
      },
      lg: {
        maxWidth: `${pxToRem("960")}rem`
      }
    }
  }
})

export default Heading;