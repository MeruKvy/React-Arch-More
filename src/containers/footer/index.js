import uTurn from "../../assets/Logo.png";
import DarkuTurn from "../../assets/uturnDark.png";
import nextMove from "../../assets/Logo2.png";
import darkNextMove from "../../assets/nextMoveD.png";
import pinPoint from "../../assets/pinPoint.png";
import darkPinPoint from "../../assets/pinPointD.png";
import leafe from "../../assets/leafe.png";
import darkLeafe from "../../assets/leafeD.png";
import terra from "../../assets/terra.png";
import darkTerra from "../../assets/terraD.png";
import dune from "../../assets/dune.png";
import darkDune from "../../assets/duneD.png";

export const logoData = (theme) => {
  return [
    {
      src: theme === "light-theme" ? uTurn : DarkuTurn,
    },
    {
      src: theme === "light-theme" ? nextMove : darkNextMove,
    },
    {
      src: theme === "light-theme" ? pinPoint : darkPinPoint,
    },
    {
      src: theme === "light-theme" ? leafe : darkLeafe,
    },
    {
      src: theme === "light-theme" ? terra : darkTerra,
    },
    {
      src: theme === "light-theme" ? dune : darkDune,
    },
  ];
};
