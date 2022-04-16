import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Current from "./Current";
import CurrentDetails from "./CurrentDetails";
import Forecast from "./Forecast";
import Loading from "./Loading";

import "./style/App.css";

const App = () => {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState({});
  const [requestError, setRequestError] = useState(200);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async (searchTerm) => {
    const { data } = await axios
      .get("http://api.weatherapi.com/v1/forecast.json", {
        params: {
          key: "6e985db4fad3466c93d215348220504",
          q: searchTerm,
          days: 3,
          400: 1006,
        },
      })
      .catch((error) => {
        setRequestError(error.response.data);
      });
    setCurrent(data.current);
    setForecast(data.forecast);
    setLocation(data.location);
  };

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  useEffect(() => {
    getUserLocation();

    fetchData(`${lat},${long}`);
  }, [lat, long]);

  const onTermSubmit = (searchTerm) => {
    fetchData(searchTerm);
    if (requestError.error) {
      switch (requestError.error.code) {
        case 1006:
          return <div>Please</div>;
        case 1003:
          console.log(requestError.error.code);
          console.log(`Please provide the location`);
        default:
          return "";
      }
      // window.location.reload();
    }
  };

  const acceptLocationRequest = () => {
    if (error.length > 0) {
      return <Loading error={error} />;
    } else if (lat === null) {
      return <Loading />;
    } else {
      return "";
    }
  };

  return (
    <div className="app">
      {acceptLocationRequest()}
      <div className="app-body">
        <Current current={current} location={location} />
        <div className="wrapper">
          <div className="container">
            <SearchBar onTermSubmit={onTermSubmit} />
            <CurrentDetails current={current} />
            <Forecast forecast={forecast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
