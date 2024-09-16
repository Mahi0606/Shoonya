import React from "react";

const DecodeDescription = ({ description }) => {
  const decodedText = description
    .replace(/\\u003C/g, "<") // Replace \u003C with <
    .replace(/\\u003E/g, ">") // Replace \u003E with >
    .replace(/\\u0026/g, "&"); // Replace \u0026 with &

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = decodedText;

  const plainText = tempDiv.textContent || tempDiv.innerText;
  return <div>{plainText}</div>;
};

export default DecodeDescription;
