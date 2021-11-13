import React from 'react'
import {
    Route,
    Switch
} from "react-router-dom";
import HomeComponent from '../Components/Pages/Home/HomeComponent';
import FavoritesComponent from '../Components/Pages/Favorites/FavoritesComponent';
import isDev from '../utils/environment'


const Routing = () => {
    return (

        <Switch>
            {isDev() ? <Route path="/itzhack-08-11-2021" exact component={HomeComponent} /> : <Route path="https://itzhackb.github.io/itzhack-08-11-2021/#/" exact component={HomeComponent} />}
            {isDev() ? <Route path="/itzhack-08-11-2021/favorites" component={FavoritesComponent} /> : <Route path="https://itzhackb.github.io/itzhack-08-11-2021/#/favorites" component={FavoritesComponent} />}
        </Switch>
    )
}

export default Routing
