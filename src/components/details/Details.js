import React from "react";
import Tag from "./Tag";

const Details = () => {
  return (
    <div className="details-container">
      <div className="details">
        <img
          className="details__img"
          src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="user-potrait"
        />
        <div>
          <div className="details__about">
            <div className="details__about--name">Emily Dubow</div>
            <div className="details__about--services">
              Designer in San Diego, CA, United States{" "}
              <span className="dot">&#8226;</span> Member since October 24, 2016
            </div>
            <div className="details__about--intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sed mi eget neque egestas condimentum scelerisque luctus massa.
              Praesent vel augue a tortor commodo pharetra. Vivamus eu quam
              mauris. Nulla tincidunt, lorem non tempor volutpat, diam arcu
              porta tellus, ac tincidunt tellus nunc quis tellus. Nulla lacinia,
              mauris quis volutpat finibus, neque enim fringilla massa, ut
              blandit elit tellus sed purus.e egestas condimentum scelerisque
              luctus massa. Praesent tortor commodo pharetra. Vivamus eu quam
              mauris. Nulla
            </div>
          </div>
          <Tag />
        </div>
      </div>
    </div>
  );
};

export default Details;
