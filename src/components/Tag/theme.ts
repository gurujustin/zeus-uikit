import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "28px",
    padding: "0 8px",
    fontSize: "16px",
  },
  [scales.SM]: {
    height: "24px",
    padding: "0 4px",
    fontSize: "14px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    color: "primary",
  },
  [variants.SECONDARY]: {
    color: "secondary",
  },
  [variants.SUCCESS]: {
    color: "success",
  },
  [variants.TEXTDISABLED]: {
    color: "textDisabled",
  },
  [variants.TEXTSUBTLE]: {
    color: "textSubtle",
  },
  [variants.BINANCE]: {
    color: "binance",
  },
  [variants.FAILURE]: {
    color: "failure",
  },
  [variants.WARNING]: {
    color: "warning",
  },
};
