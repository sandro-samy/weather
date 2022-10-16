import React from "react";

const Caption = ({ weather }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <>
      {typeof weather.main !== "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location mb-3">
              {weather.name} , {weather.sys.country}
            </div>
            <div className="date mb-3">{dateBuilder(new Date())}</div>
          </div>
          <div className="weater-box">
            <div className="temp mb-3">
              {Math.round(weather.main.temp)}
              <sup>o</sup>C
            </div>
            <div className="weather mb-3">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Caption;
