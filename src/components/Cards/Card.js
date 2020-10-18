import React from "react";
import Tag from "./Tag";

export default function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="user"
        />
        <img
          className="icon verified-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
          alt="verified-icon"
        />
        <div className="card__online-icon">
          <span
            className="icon online-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
            alt="online-icon"
          >
            &#9679;
          </span>
        </div>
      </div>
      <div className="card__about">
        Passionate doer! Hungry and motivated developer looking for his perfect
        fit. Husband and Father
      </div>
      {/* <div className="masonary" /> */}
      <Tag />
      <a href="#1" className="btn btn-sec">
        Available now
      </a>
      <div className="card__lastseen">seen 6 hours ago</div>
    </div>
  );
}

/*
https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

https://images.unsplash.com/photo-1568725624707-9d968f934b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
*/
