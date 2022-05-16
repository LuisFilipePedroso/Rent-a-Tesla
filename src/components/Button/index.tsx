import { styled } from "../../stitches.config";

const Button = styled('button', {
  padding: '8px 32px',
  borderRadius: 8,
  fontSize: "1rem",
  fontWeight: "600",
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

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