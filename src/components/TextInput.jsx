import React, { useState } from "react";
import { TOKENS, BODY_FONT } from "../theme";

const inputBase = {
  width: "100%",
  boxSizing: "border-box",
  background: TOKENS.ink,
  border: `1px solid ${TOKENS.line}`,
  borderRadius: 6,
  padding: "10px 12px",
  color: TOKENS.ivory,
  fontFamily: BODY_FONT,
  fontSize: 14,
  outline: "none",
};

function TextInput(props) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputBase,
        borderColor: focused ? TOKENS.amber : TOKENS.line,
        boxShadow: focused ? `0 0 0 3px ${TOKENS.amberDim}55` : "none",
      }}
    />
  );
}

export default TextInput;
