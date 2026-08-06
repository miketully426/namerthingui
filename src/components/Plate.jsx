import React from "react";
import { TOKENS, DISPLAY_FONT, MONO_FONT } from "../theme";

function Plate({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          fontFamily: MONO_FONT,
          fontSize: 11,
          letterSpacing: "0.18em",
          color: TOKENS.amber,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          fontFamily: DISPLAY_FONT,
          fontWeight: 800,
          fontSize: 26,
          letterSpacing: "0.02em",
          color: TOKENS.ivory,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default Plate;
