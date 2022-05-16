import { styled } from "../../../stitches.config";
import { pxToRem } from "../../../utils";

const Title = styled('h6', {
  color: '$gray600',
  fontSize: '2rem',

  variants: {
    size: {
      sm: {
        maxWidth: `${pxToRem("300")}rem`
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

export default Title;