import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import LocationCardList from './components/LocationCardList';
import MapLocation from './components/MapLocation';

export const Routes = (props) => {
    return (
        <Router basename="/movies-on-a-map">
            <Route 
                exact path="/" 
                render={(props) => {
                    return <LocationCardList />
                }}
            />
            <Route
                path="/map-view"
                render={(props) => {
                    return <MapLocation />
                }}
            />
        </Router>
    )
}


export default Routes;