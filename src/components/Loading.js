import React from "react";

const Loading = ({ error }) => {
  return (
    <div className="loading">
      {/* <div className="error">{(error = "Please, accept location request")}</div> */}
      <div className="loader">
        <div className="spinner-light"></div>
        <div className="spinner-dark"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
