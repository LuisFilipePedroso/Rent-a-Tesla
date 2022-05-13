import { styled } from "../../stitches.config";

const Button = styled('button', {
  padding: '8px 32px',
  borderRadius: 8,
  fontSize: "1rem",
  fontWeight: "bold",
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$gray50',
      },
      secondary: {
        backgroundColor: '$gray50',
        color: '$primary',
      }
    }
  },

  defaultVariants: {
    variant: "primary"
  }
})

export default Button;