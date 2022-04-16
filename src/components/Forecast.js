import React from "react";

const Forecast = ({ forecast }) => {
  let myDate = new Date();
  let local = myDate.toISOString().slice(0, 10);
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let isoTomorrow = tomorrow.toISOString().slice(0, 10);

  let forecastDay = forecast.forecastday;
  let rendedredForecast;
  if (forecastDay) {
    rendedredForecast = forecastDay.map((theForecast) => {
      const checkDay = () => {
        switch (theForecast.date) {
          case local:
            return "Today";
          case isoTomorrow:
            return "Tomorrow";
          default:
            return theForecast.date;
        }
      };
      return (
        <div key={theForecast.date} className="forecast-box">
          <p className="forecast-date">{checkDay()}</p>
          <div className="forecast-icon">
            <img src={`${theForecast.day.condition.icon}`} />
          </div>
          <p className="forecast-temp">
            Min: <span>{theForecast.day.mintemp_c} °C</span> <br />
            Max: <span>{theForecast.day.maxtemp_c} °C</span>
          </p>
        </div>
      );
    });
  }
  return <div className="forecast">{rendedredForecast}</div>;
};

export default Forecast;
