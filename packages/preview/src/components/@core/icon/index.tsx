import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, highlightPattern = null }) {
  const copyToClipboard = () => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
      position: "bottom-center",
    });
  };

  const highlightedName = () => {
    if (!highlightPattern) return name;

    const parts = name.split(highlightPattern);
    const result = [];
    for (let i = 0; i < parts.length; i++) {
      result.push(parts[i].match(highlightPattern) ? <b>{parts[i]}</b> : parts[i]);
    }

    return result;
  };

  return (
    <div className="item" tabIndex={0} onClick={copyToClipboard} key={name}>
      <div className="icon h2">{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
    </div>
  );
}

export default Icon;
