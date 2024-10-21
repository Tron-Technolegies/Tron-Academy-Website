import React from "react";

export default function WhyDetailElt({ title, content }) {
  return (
    <div className="flex flex-col gap-5 lg:max-w-[380px]">
      <h4 className="roboto-font text-3xl font-bold text-hoverPrimary">
        {title}
      </h4>
      <p className="inter-font text-justify">{content}</p>
    </div>
  );
}
