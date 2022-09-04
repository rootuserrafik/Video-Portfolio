import React from "react";

function Button({ text, ...rest }) {
  return (
    <button type="submit" {...rest}>
      {text}
    </button>
  );
}

export default Button;
