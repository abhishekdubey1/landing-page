import React from "react";
import "../../styles.css";
let data = [
  "ui design",
  "html",
  "css",
  "react-native",
  "graphql",
  "firebase",
  "mongodb",
];
export default function Tag() {
  return (
    <div className="cards__tag">
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
    </div>
  );
}
