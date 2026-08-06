import React, { useState } from "react";
import { TOKENS, DISPLAY_FONT, MONO_FONT } from "../theme";

function PersonTag({ person, onDelete, deleting }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        background: TOKENS.panelAlt,
        border: `1px solid ${TOKENS.line}`,
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 10,
        opacity: deleting ? 0.5 : 1,
      }}
    >
      <div style={{ width: 6, background: TOKENS.teal }} />
      <div style={{ padding: "12px 16px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 800,
              fontSize: 17,
              color: TOKENS.ivory,
              textTransform: "uppercase",
            }}
          >
            {person.name}
          </span>
          <span
            style={{ fontFamily: MONO_FONT, fontSize: 11, color: TOKENS.slate }}
          >
            #{person.id}
          </span>
        </div>
        <div
          style={{
            marginTop: 4,
            fontFamily: MONO_FONT,
            fontSize: 12,
            color: TOKENS.slate,
          }}
        >
          AGE {person.age ?? "—"}
        </div>
      </div>
      <button
        onClick={() => onDelete(person.id)}
        disabled={deleting}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={`Remove ${person.name}`}
        title={`Remove ${person.name}`}
        style={{
          alignSelf: "stretch",
          padding: "0 16px",
          border: "none",
          borderLeft: `1px solid ${TOKENS.line}`,
          background: hover ? `${TOKENS.red}1A` : "transparent",
          color: hover ? TOKENS.red : TOKENS.slate,
          fontFamily: MONO_FONT,
          fontSize: 15,
          fontWeight: 700,
          cursor: deleting ? "not-allowed" : "pointer",
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default PersonTag;
