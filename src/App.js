import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBar from "./components/SingleBar";
import SearchBar from "./components/SearchBar";
import AllBars from "./components/AllBars";
import { useState } from "react";
import LeftInfoCard from "./components/LeftInfoCard";
// import header_img from "./assets/header.jpg";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const api = {
    key: 'EYFBNWXHS8759MHF5QFBADDCN',
    base: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
    dynamic_period: "last365days", //interesting increasing the days by 1 increases the query cost by
    example_query: "London,UK",
    include: "&include=obs%days&elements=datetime,tempmax,tempmin,temp",
  };


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}${query}/${api.dynamic_period}?unitGroup=us&key=${api.key}${api.include}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          console.log(query);
        });
    }
  }

  // const reverseWeather (arr) => {
  //   arr.slice
  // }


  return (
    <>
      {/* <div className="header">
        <img src={header_img} alt="bohemian header" /> */}
      <div className="search_container">
        <SearchBar
          query={query}
          updateQuery={e => setQuery(e.target.value)}
          search={search} />
        {/* </div> */}
      </div>
      <div className="body_container">
        <div className="left_container">

          {(typeof weather.address != "undefined") ? (
            <LeftInfoCard
              weather={weather} />
          )
            : ('')}

        </div>

        {(typeof weather.address != "undefined") ? (


          <div className="bar_container">

            <AllBars
              weather={weather} />
          </div >

        ) : ('')}
      </div>

    </>
  );
}

export default App;
