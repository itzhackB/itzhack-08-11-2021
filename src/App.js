import React, { useEffect } from 'react';
import './App.css';
import Routing from './Routing/Routing';
import HeaderComponent from './Components/Features/Header/HeaderComponent';
import { useDispatch, useSelector } from 'react-redux'
import store from './Redux/store'
import { GetdeafultCity } from '../src/Redux/actions/weatherActions'
import { saveFavorites } from '../src/utils/favoriteLocalStorage'
import { getCityByGeo } from '../src/Redux/actions/weatherActions'
import LoaderComponent from './Components/Features/Loader/LoaderComponent';



function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.isLoading)
  const theme = useSelector((state) => state.theme)
  const currentWeather = useSelector((state) => state.weather.current)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      location => dispatch(getCityByGeo(location.coords.latitude, location.coords.longitude)),
      err => {
        dispatch(GetdeafultCity('Tel Aviv'))
      }
    )
    saveFavorites(store.getState.favorites)
  }, [dispatch])


  return (
    <div className={theme ? "App" : "dark"}>
      {isLoading ? <LoaderComponent /> : ""}
      {
        Object.keys(currentWeather).length === 0 ? ""
          :
          <>
            <HeaderComponent />
            <Routing />
          </>
      }

    </div>
  );
}

export default App;
