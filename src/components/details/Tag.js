import React from "react";
import "../../styles.css";
let data = [
  "UI Design",
  "Product Design",
  "Responsive UI",
  "Web App Design",
  "UX Design",
  "DigitalProduct Design",
  "IOS UI Design",
  "Mobile App Design",
  "Adobe Suite",
  "Sketch",
  "IOS",
  "Web UI",
  "Android App Design",
  "Information Architecture(IA)",
  "Graphic Designer",
];
export default function Tag() {
  return (
    <div
      className="grid"
      data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
    >
      {data.map((el) => (
        <div
          key={el}
          className="grid-item"
          style={{ border: "1px solid black", width: "max-content" }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
