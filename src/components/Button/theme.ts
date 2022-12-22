import { justifyContent, width } from "styled-system";
import { scales, variants, justifies } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "40px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
  [scales.NAV]: {
    height: "42px",
    padding: "0 32px",
    minWidth: "200px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primaryBright",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primaryBright",
    boxShadow: "none",
    color: "primaryBright",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "white",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primaryBright",
    boxShadow: "none",
  },
};

export const justifyVariants = {
  [justifies.START]: {
    justifyContent: "start",
  },
  [justifies.CENTER]: {
    justifyContent: "center",
  },
  [justifies.END]: {
    justifyContent: "end",
  },
};