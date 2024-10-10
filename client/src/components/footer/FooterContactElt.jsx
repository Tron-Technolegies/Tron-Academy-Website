import React from "react";

export default function FooterContactElt({ icon, content }) {
  return (
    <div className="flex gap-3 items-center">
      <div>{icon}</div>
      <p>{content}</p>
    </div>
  );
}
