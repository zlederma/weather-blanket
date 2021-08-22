// import PropTypes from "prop-types";

//weather.days[0].datetime --syntax for accessing the obect array
import { useState } from "react";

// const workingFetchURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/87547?unitGroup=us&key=X93H4RMABUUQCNAQP89ANS87T';
// const testBasicFetchURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Springfield,IL?unitGroup=us&key=DHBS12DVFHFFSHF764DGDBC'


// const api = {
//   key: 'X93H4RMABUUQCNAQP89ANS87T',
//   base: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
//   dynamic_period: "last3days", //interesting increasing the days by 1 increases the query cost by
//   example_query: "London,UK",
//   include: "&include=obs%days&elements=datetime,tempmax,tempmin,temp",
// };

// const fetchBuilder = (queryName) =>{
//   return `${api.base}${queryName}/${api.dynamic_period}?unitGroup=us&key=${api.key}${api.include}`
// }

// //fetchBuilder("London,UK")

// // fetch(fetchBuilder("London,UK"))
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));


const SingleBar = ({ day, key }) => {

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
    if (day.temp >= 55) {
      if (day.temp >= 99) {
        return "rgb(87,52,56)";
      }
      if (day.temp >= 88) {
        return "rgb(114, 42, 44)";
      }
      if (day.temp >= 77) {
        return "rgb(141, 76, 46)";
      }
      if (day.temp >= 66) {
        return "rgb(194, 156, 73)";
      }
      if (day.temp >= 55) {
        return "rgb(101, 115, 66)";
      }
    }

    return "rgb(55, 155, 0)";
  };

  // console.log(weather.days.length);

  return (
    //Makes it so it does not error when weather is undefined
    (typeof day.temp != "undefined" ? (
      <>
        <div
          className="bar"
          style={{
            backgroundColor: divColorChooser(),
          }}
        >
          {day.temp}, "hello", {day.datetime}, {key}
        </div>
      </>
    ) :
      <div></div>)
  );
};

export default SingleBar;
