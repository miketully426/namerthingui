import React from "react";
import { TOKENS, MONO_FONT } from "../theme";

function Field({ label, children }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <div
        style={{
          fontFamily: MONO_FONT,
          fontSize: 11,
          letterSpacing: "0.08em",
          color: TOKENS.slate,
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      {children}
    </label>
  );
}

export default Field;
