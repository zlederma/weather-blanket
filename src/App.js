import SingleBar from "./components/SingleBar";
import SearchBar from "./components/SearchBar";
import AllBars from "./components/AllBars";
import { useState } from "react";
import LeftInfoCard from "./components/LeftInfoCard";

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

  return (
    <>
      <div className="left-container">
        <SearchBar
          query={query}
          updateQuery={e => setQuery(e.target.value)}
          search={search} />
        {(typeof weather.address != "undefined") ? (
          <LeftInfoCard
            weather={weather} />
        )
          : ('')}
      </div>

      {(typeof weather.address != "undefined") ? (


        <div className="barContainer">
          {weather.days.map((day, key) => {
            return (
              < SingleBar
                day={day}
                key={key} />
            );
          })}

        </div >
      ) : ('')}

    </>

  );
}

export default App;
