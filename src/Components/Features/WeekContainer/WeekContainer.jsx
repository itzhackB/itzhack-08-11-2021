import React from 'react'
import DayCardComponent from '../Card/DayCardComponent'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, deleteFavorite } from '../../../Redux/actions/favoritesAction';
import Button from '@mui/material/Button';
import LoaderComponent from '../Loader/LoaderComponent';
import { tempConverter } from '../../../utils/tempConverter';

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
                    <div className="container">
                        {
                            temp? <h1 className="mainCard">{currentWeather?.Temperature?.Imperial?.Value} °F</h1>
                            :
                            <h1 className="mainCard">{currentWeather?.Temperature?.Metric?.Value} °C</h1>

                        }
                        <h2 className="mainCard">{currentLocation.city}</h2>
                        <h3 className="mainCard">{currentWeather.WeatherText}</h3>

                        {checkIfFavorite() ? <Button className="mainCard" style={{ marginBottom: '2%', position: 'relative', left: '47%' }} variant="contained" onClick={() => dispatch(deleteFavorite(currentLocation.cityKey))}>Unsubscribe</Button>
                            : <Button className="mainCard" style={{ marginBottom: '2%', position: 'relative', left: '47%' }} variant="contained" onClick={() => dispatch(addFavorite(currentLocation.cityKey, currentLocation.city))}>Subscribe</Button>
                        }
                        <div className="daysForecastWrapper">
                            <h1 className="daysForecast">5-Day Forecast.</h1>
                        </div>

                        <div className="cardsWrapper">

                            {weekWeather.map((day, index) => {
                                return <DayCardComponent day={day} index={index} key={day.id} />
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
