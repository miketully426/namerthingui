import React from "react";
import { TOKENS } from "../theme";

function Card({ children }) {
  return (
    <div
      style={{
        background: TOKENS.panel,
        border: `1px solid ${TOKENS.line}`,
        borderRadius: 10,
        padding: 22,
        marginBottom: 18,
      }}
    >
      {children}
    </div>
  );
}

export default Card;
