import SingleBar from "./components/SingleBar";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {

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
  
  return(
    <>
    <SearchBar></SearchBar>
    <SingleBar
      temperature = {90}> </SingleBar>
    </>
  ) 
}

export default App;
