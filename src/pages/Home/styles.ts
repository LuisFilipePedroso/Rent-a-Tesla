import { styled } from "../../stitches.config";
import { pxToRem } from "../../utils";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingTop: `${pxToRem("16")}rem`,
  paddingBottom: `${pxToRem("16")}rem`,
});
