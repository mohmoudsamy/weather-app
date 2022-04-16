import React from "react";

const Current = ({ current, location }) => {
  let date = new Date();
  let currentDate = date.toDateString().slice(0, 10);

  const renderedCurrentData = () => {
    if (current.condition) {
      return (
        <div className="current">
          <div className="current-icon">
            <img src={`${current.condition.icon}`} />
          </div>
          <div className="current-temp">
            <span className="temp">{current.temp_c} °C</span> <br />
            <span className="condition">{current.condition.text}</span>
          </div>
          <div className="current-info">
            <div className="current-date">Today - {currentDate}</div>
            <div className="current-location">
              {location.name}, {location.region}, {location.country}
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{renderedCurrentData()}</>;
};

export default Current;
