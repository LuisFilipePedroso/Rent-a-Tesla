import { styled } from "../../stitches.config";
import { pxToRem } from "../../utils";

export const Container = styled("div", {
  display: "flex",
  width: "100%",
});

export const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  backgroundColor: "$gray100",
  padding: "64px 0",
});

export const HeaderContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // maxWidth: 1480,
  // marginLeft: "auto",
  // marginRight: "auto",
});

export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 0,
  flexShrink: 1,
  flexWrap: "wrap",
  maxWidth: 1480,
  marginLeft: "auto",
  marginRight: "auto",
});

export const Image = styled("img", {
  height: `${pxToRem("400")}rem`,
});
