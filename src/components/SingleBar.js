// import PropTypes from "prop-types";

//weather.days[0].datetime --syntax for accessing the obect array
import { useState } from "react";

let exampleFetchURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/last360days?key=X93H4RMABUUQCNAQP89ANS87T&include=obs%days&elements=datetime,tempmax,tempmin,temp";

let baseFetch =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL?unitGroup=us&key=AHBS12DVFHFFSHF764DGDBC";

const api = {
  key: "X93H4RMABUUQCNAQP89ANS87T",
  base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  dynamic_period: "lastyear",
};

fetch(baseFetch)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

const SingleBar = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  fetch(baseFetch)
    .then((res) => res.json())
    .then((result) => setWeather(result));

  return (
    <div className="bar">
      {weather.days[0].datetime}, {weather.days[0].tempmax}
    </div>
  );
};

export default SingleBar;
