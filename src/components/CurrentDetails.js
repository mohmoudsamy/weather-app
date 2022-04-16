import React from "react";

const CurrentDetails = ({ current }) => {
  return (
    <div className="current-details">
      <div className="details-box">
        <i className="fa-solid fa-wind"></i>
        <h1 className="heading">Wind</h1>
        <p className="description">Speed: {current.wind_mph}</p>
        <p className="description">Direction: {current.wind_dir}</p>
      </div>
      <div className="details-box">
        <i className="fa-solid fa-droplet"></i>
        <h1 className="heading">Humidity</h1>
        <p className="description">{current.humidity}</p>
      </div>
      <div className="details-box">
        <i className="fa-solid fa-eye"></i>
        <h1 className="heading">Visibility</h1>
        <p className="description">KM: {current.vis_km}</p>
        <p className="description">Miles: {current.vis_miles}</p>
      </div>
      <div className="details-box">
        <i className="fa-solid fa-fan"></i>
        <h1 className="heading">Pressure</h1>
        <p className="description">MB: {current.pressure_mb}</p>
      </div>
    </div>
  );
};

export default CurrentDetails;
