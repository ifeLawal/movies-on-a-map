import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import LocationCardList from './components/LocationCardList';

export const Routes = (props) => {
    return (
        <Router basename="/movies-on-a-map">
            <Route 
                exact path="/" 
                render={(props) => {
                    return <LocationCardList />
                }}
            />
        </Router>
    )
}


export default Routes;