import React from 'react'
import DayCardComponent from '../Card/DayCardComponent'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../../Redux/actions/favoritesAction';
import Button from '@mui/material/Button';


const WeekContainer = () => {


    const dispatch = useDispatch()
    const weekWeather = useSelector((state) => state.weather.weekly)
    const currentLocation = useSelector((state) => state.location)
    const currentWeather = useSelector((state) => state.weather.current)
    const favorites = useSelector((state) => state.favorites)
    const temp = useSelector((state) => state.temp)


    const checkIfFavorite = () => {
        if (favorites.some(e => e.id === currentLocation.cityKey)) {
            return true
        }
        else {
            return false
        }
    }
    return (

        <>
            {
                currentWeather.Temperature ?
                    <div className="weather-forecast container">
                        <div className="weather-current__today">
                            <h2 className="weather-current__title">{currentLocation.city}</h2>
                            <div className="weather-forecast__current">
                                <p className="weather-forecast__day">Today</p>
                                <p className="weather-forecast__text">{currentWeather.WeatherText}</p>
                                <p className="weather-forecast__temp">{temp ? `${currentWeather?.Temperature?.Imperial?.Value} °F` : `${currentWeather?.Temperature?.Metric?.Value} °C`}</p>
                            </div>
                            {checkIfFavorite() ? <button className="weather-current__btn mainCard"  variant="contained" onClick={() => dispatch(deleteFavorite(currentLocation.cityKey))}>Unsubscribe</button>
                                : <button className="weather-current__btn mainCard" variant="contained" onClick={() => dispatch(addFavorite(currentLocation.cityKey, currentLocation.city))}>Subscribe</button>
                            }
                        </div>
                        <div className="weather-forecast__list">

                            {weekWeather.map((day, index) => {
                                return <DayCardComponent day={day} index={index} />
                            })}

                        </div>

                    </div>
                    :
                    ""
            }
        </>

    )
}

export default WeekContainer
