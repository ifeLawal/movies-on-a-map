import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { Helper } from '../helpers.js'
import { ScrapedData } from '../staticScrapedData'
import Location from './Location'
import SearchForm from './SearchForm'


export const LocationCardList = (props) => {

  const [params, setParams] = useState({"title":"","neighborhood":""});
  const [locations, setLocationList] = useState(ScrapedData.locationList);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    
    // set parameter list for filtering location list
    setParams(prevParam => {
      return {...prevParam, [param]: value}
    });
    
    // filter for the parameter values
    // there is a delay in the parameter update so use the current value for the latest parameter
    // to look into doing this with useEffect()
    setLocationList(ScrapedData.locationList.filter(location => {
      for(let selector in params) {
        let lowerParam = location[selector].toLowerCase();
        let valToCheck = value;
        if(selector !== param) {
          valToCheck = params[selector].toLowerCase();
        }
        if(valToCheck !== "" && !lowerParam.includes(valToCheck.toLowerCase())){
          return false;
        }
      }
      return true;
    }))
  }

  // useEffect()

  return (
    <Container className="mt-3">
      <h1>Movie Scenes List</h1>
      <SearchForm 
        onParamChange={handleParamChange
        }/>
      {locations.map((location,index) => {
        return <Location 
          key={index}
          location={location}
        />
      })}

    </Container>
  );
}

export default LocationCardList;
