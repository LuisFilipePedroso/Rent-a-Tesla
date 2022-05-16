import { AiFillCar as DefaultAiFillCar } from "react-icons/ai";
import { BiHappyAlt as DefaultBiHappyAlt } from "react-icons/bi";
import { MdOutlineLocalGasStation as DefaultMdOutlineLocalGasStation } from "react-icons/md";
import { TiTree as DefaultTiTree } from "react-icons/ti";
import { styled } from "../../stitches.config";
import { pxToRem } from "../../utils";

export const Container = styled("div", {
  backgroundColor: "$gray50",
  paddingTop: `${pxToRem("88")}rem`,
  paddingBottom: `${pxToRem("88")}rem`,
});

export const BenefitsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridGap: "4rem",
  marginTop: "3rem",
});

export const Benefit = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "1rem",
});

export const IconContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // maxWidth: "56px",
  borderRadius: 8,
  backgroundColor: "$lightPrimary",
  padding: "0.8rem",
  height: "auto",
});

export const TiTree = styled(DefaultTiTree, {
  color: "$primary",
});

export const AiFillCar = styled(DefaultAiFillCar, {
  color: "$primary",
});

export const GasPumpIcon = styled(DefaultMdOutlineLocalGasStation, {
  color: "$primary",
});

export const HappyUserIcon = styled(DefaultBiHappyAlt, {
  color: "$primary",
});
