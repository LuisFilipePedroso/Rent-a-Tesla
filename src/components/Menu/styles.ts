import { styled } from "../../stitches.config";
import { pxToRem } from "../../utils";

export const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: `${pxToRem("64")}rem`,
  width: "100%",
  maxWidth: 1480,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: `${pxToRem("64")}rem`,
});

export const Logo = styled("h3", {
  fontWeight: 600,
  fontSize: "1.125rem",
  color: "$primary",
});

export const Nav = styled("nav", {
  display: "flex",
});

export const List = styled("ul", {
  display: "flex",
  listStyleType: "none",
});

export const ListItem = styled("li", {
  marginRight: "2rem",
  color: "$gray500",
  fontWeight: "500",

  display: "flex",
  alignItems: "center",

  variants: {
    selected: {
      true: {
        color: "$gray600",
        fontWeight: "600",
      },
    },
  },
});
