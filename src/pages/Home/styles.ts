import { styled } from "../../stitches.config";
import { pxToRem } from "../../utils";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
});

export const Header = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "$gray100",
  padding: "128px 0",
});

export const Content = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: 1480,
  marginLeft: "auto",
  marginRight: "auto",
});

export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 0,
  flexShrink: 1,
  flexWrap: "wrap",
});

export const Image = styled("img", {
  variants: {
    size: {
      sm: {
        height: `${pxToRem("25")}rem`,
      },
      lg: {
        height: `${pxToRem("384")}rem`,
      },
    },
  },
});

export const SocialButtonsContainer = styled("div", {
  display: "flex",
  marginTop: "2rem",
  gap: "1rem",
});

export const SocialButton = styled("button", {
  display: "flex",
  alignItems: "center",
  border: "none",
  padding: "8px 16px",
  borderRadius: "8px",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "1rem",
  },

  variants: {
    color: {
      light: {
        backgroundColor: "$gray50",
        color: "$gray600",
        border: "1px solid $gray200",

        div: {
          span: {
            fontWeight: "600",
          },

          p: {
            fontWeight: "bold",
            fontSize: "1.125rem",
          },
        },
      },
      dark: {
        backgroundColor: "$gray600",
        color: "$gray50",
        border: "1px solid $gray200",

        div: {
          span: {
            fontWeight: "500",
          },

          p: {
            fontWeight: "bold",
            fontSize: "1.125rem",
          },
        },
      },
    },
  },
});
