import { styled } from "../../../stitches.config";
import { pxToRem } from "../../../utils";

const Body = styled('h6', {
  color: '$gray500',
  fontWeight: '400',
  marginTop: "1rem",
  lineHeight: 1.4,

  variants: {
    size: {
      sm: {
        maxWidth: `${pxToRem("208")}rem`
      },
      md: {
        maxWidth: `${pxToRem("416")}rem`
      },
      lg: {
        maxWidth: `${pxToRem("832")}rem`
      }
    },
    variant: {
      body1: {
        fontSize: '1.125rem',
      },
      body2: {
        fontSize: '1rem',
      }
    },
  },


  defaultVariants: {
    variant: "body1"
  }
})

export default Body;