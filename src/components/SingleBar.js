// import PropTypes from "prop-types";

//weather.days[0].datetime --syntax for accessing the obect array
import { useState } from "react";

const workingFetchURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/87547?unitGroup=us&key=X93H4RMABUUQCNAQP89ANS87T';
const testBasicFetchURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL?unitGroup=us&key=DHBS12DVFHFFSHF764DGDBC'


const api = {
  key: 'X93H4RMABUUQCNAQP89ANS87T',
  base: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
  dynamic_period: "last3days", //interesting increasing the days by 1 increases the query cost by
  example_query: "London,UK",
  include: "&include=obs%days&elements=datetime,tempmax,tempmin,temp",
};

const fetchBuilder = (queryName) =>{
  return `${api.base}${queryName}/${api.dynamic_period}?unitGroup=us&key=${api.key}${api.include}`
}

//fetchBuilder("London,UK")

// fetch(fetchBuilder("London,UK"))
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const testFetch = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL/2021-07-13/2021-07-16?unitGroup=us&key=${api.key}`;

const SingleBar = ({temperature}) => {
  // const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});

  // fetch(testFetch)
  //   .then((res) => res.json())
  //   .then((result) => setWeather(result));

  // let tempWeather = {
  //   temp: 65,
  //   date_time: "2021-08-11",
  //   location: "Stockholm",
  // };

  // console.log(tempWeather);

  const divColorChooser = () => {
    if (temperature >= 55) {
      if (temperature >= 99) {
        return "rgb(87,52,56)";
      }
      if (temperature >= 88) {
        return "rgb(114, 42, 44)";
      }
      if (temperature >= 77) {
        return "rgb(141, 76, 46)";
      }
      if (temperature >= 66) {
        return "rgb(194, 156, 73)";
      }
      if (temperature >= 55) {
        return "rgb(101, 115, 66)";
      }
    }

    return "rgb(55, 155, 0)";
  };

  return (
    <div
      className="bar"
      style={{
        backgroundColor: divColorChooser(),
      }}
    >
      hi
      {/* {weather.address} */}
    </div>
  );
};

export default SingleBar;
