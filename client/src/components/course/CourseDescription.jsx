import React from "react";

export default function CourseDescription({
  title,
  img,
  imgtitle,
  desc,
  points,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <img src={img}></img>
        <p>{imgtitle}</p>
      </div>
      <p>{desc}</p>
      <div>
        <p></p>
      </div>
    </div>
  );
}
