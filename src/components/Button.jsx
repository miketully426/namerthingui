import React from "react";
import { TOKENS, DISPLAY_FONT } from "../theme";

function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: DISPLAY_FONT,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontSize: 13,
        padding: "11px 20px",
        borderRadius: 6,
        border: "none",
        background: disabled ? "#4a4a4a55" : TOKENS.amber,
        color: disabled ? TOKENS.slate : "#161D27",
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
      }}
    />
  );
}

export default Button;
