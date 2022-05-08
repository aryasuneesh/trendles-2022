import React, { useState } from "react";
import "./myCSS/Events.css";
import data from "./eventsData";

const Events = () => {
  const [heading, setHeading] = useState("CURRENT");
  const [list, setList] = useState(data);
  const date = new Date().getTime();
  // console.log(a.getTime() + " " + b.getTime());
  const filterClick = (e) => {
    // console.log(e.target.name);
    if (e.target.name == "Previous") {
      setHeading("PREVIOUS");
      const one = document.querySelector(".previous");
      const two = document.querySelector(".current");
      const three = document.querySelector(".upcomming");
      one.classList.add("border");
      two.classList.remove("border");
      three.classList.remove("border");
      var newList = data.filter((item) => {
        return item.time < date;
      });
      setList(newList);
    }
    if (e.target.name == "Current") {
      setHeading("CURRENT");
      const one = document.querySelector(".previous");
      const two = document.querySelector(".current");
      const three = document.querySelector(".upcomming");
      one.classList.remove("border");
      two.classList.add("border");
      three.classList.remove("border");
      setList(data);
    }
    if (e.target.name == "Upcomming") {
      setHeading("UPCOMMING");
      const one = document.querySelector(".previous");
      const two = document.querySelector(".current");
      const three = document.querySelector(".upcomming");
      one.classList.remove("border");
      two.classList.remove("border");
      three.classList.add("border");
      var newList = data.filter((item) => {
        return item.time > date;
      });
      setList(newList);
    }
  };
  return (
    <div className="events-page-body">
      <div className="heading">
        <h1>EVENTS |</h1>&nbsp;
        <h1>{heading}</h1>
      </div>
      <div className="filter">
        <h2>Filter</h2>
        <button
          name="Previous"
          type="button"
          className="previous"
          onClick={(e) => {
            filterClick(e);
          }}
        >
          Previous
        </button>
        <button
          type="button"
          name="Current"
          className="current"
          onClick={(e) => {
            filterClick(e);
          }}
        >
          Current
        </button>
        <button
          type="button"
          name="Upcomming"
          className="upcomming"
          onClick={(e) => {
            filterClick(e);
          }}
        >
          Upcomming
        </button>
      </div>
      <div className="content">
        {list.map((item) => {
          const { id, date, heading, info, img } = item;
          return (
            <div className="box" key={id}>
              <div className="left">
                <p className="date">{date}</p>
                <p className="head">{heading}</p>
                <p className="info">{info}</p>
              </div>
              <div className="right">
                <img src={img}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Events;
{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/CHqv1ft/1.png" alt="1" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/MhhQdpB/2.png" alt="2" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/34kdh9W/3.png" alt="3" border="0"></a> */
}
