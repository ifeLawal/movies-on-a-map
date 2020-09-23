import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'

import { ScrapedData } from '../data/staticScrapedData'
import { Helper } from '../helpers'

import Location from './Location'
import SearchForm from './SearchForm'
import Navbar from './Navbar';
import LocationsPagination from './LocationsPagination';


export const LocationCardList = (props) => {

  // const fullLocationList = ScrapedData.locationList;
  const fullLocationList = Helper.locationList;
  let numItems = 25;

  const [params, setParams] = useState({"title":"","neighborhood":""});
  const [page, setPage] = useState(1);
  const [hasNextPage, setNextPage] = useState(fullLocationList.length > numItems);
  let [minRange, maxRange] = [(page-1)*numItems,(page-1)*numItems+numItems]
  const [locations, setLocationList] = useState(fullLocationList.slice(minRange,maxRange));

  // hard coded next page...this should be solved through useEffect, I will need to figure this out at some point
  // let hasNextPage = ;

  // used for when a user enters a filter
  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;

    // set parameter list for filtering location list
    setParams(prevParam => {
      return {...prevParam, [param]: value}
    });
    
    // filter list
    const filteredList = fullLocationList.filter(location => {
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
    });

    // set the page and check if we have a next page
    setPage(1);
    minRange = 0;
    maxRange = filteredList.length > numItems ? numItems : filteredList.length;
    setNextPage(numItems < filteredList.length);

    // filter for the parameter values
    // there is a delay in the parameter update so use the current value for the latest parameter
    // to look into doing this with useEffect()
    setLocationList(filteredList.slice(minRange,maxRange));
  }

  // we need to update page values 
  function setPageThenCheckForNextPage(num) {
    setPage(num);
    setNextPage((num-1)*numItems+numItems < fullLocationList.length);
    const [minRange, maxRange] = [(num-1)*numItems,(num-1)*numItems+numItems];
    console.log(fullLocationList);
    setLocationList(fullLocationList.slice(minRange,maxRange));
  }
  // useEffect()

  return (
    <div>
      <Navbar />
        <Container className="mt-3">
        <h1>A Listing of Movie Scenes Located in NYC</h1>
        <SearchForm 
          onParamChange={handleParamChange
          }/>
          <LocationsPagination 
            page={page}
            setPage={setPageThenCheckForNextPage}
            hasNextPage={hasNextPage}
          />
        {locations.map((location,index) => {
          return <Location 
            key={index}
            location={location}
          />
        })}
          <LocationsPagination 
            page={page}
            setPage={setPageThenCheckForNextPage}
            hasNextPage={hasNextPage}
          />
      </Container>
    </div>
  );
}

export default LocationCardList;
