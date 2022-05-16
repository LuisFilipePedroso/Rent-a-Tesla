import { styled } from "../../stitches.config";
import Content from "../Content";

export const Container = styled(Content, {
  padding: "8rem 0",
  alignItems: "center",
});

export const Image = styled("img", {
  width: "40rem",
  height: "40rem",
  objectFit: "cover",
  borderRadius: "8px",
});

export const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: "6rem",
});
