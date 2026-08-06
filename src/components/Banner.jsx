import React from "react";
import { TOKENS, MONO_FONT } from "../theme";

function Banner({ kind, children }) {
  if (!children) return null;
  const color = kind === "error" ? TOKENS.red : TOKENS.teal;
  return (
    <div
      style={{
        marginTop: 12,
        padding: "10px 12px",
        borderRadius: 6,
        border: `1px solid ${color}66`,
        background: `${color}14`,
        color,
        fontFamily: MONO_FONT,
        fontSize: 12.5,
        lineHeight: 1.5,
      }}
    >
      {children}
    </div>
  );
}

export default Banner;
