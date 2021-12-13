import React from 'react'
import { useSelector } from 'react-redux'
import { tempConverter } from '../../../utils/tempConverter';
import "../../../css/weather-icons.min.css";
import '../../../css/weather-icons.css'



var moment = require('moment');

const DayCardComponent = ({ day, index }) => {

    const currentWeather = useSelector((state) => state.weather.current)
    const temp = useSelector((state) => state.temp)

    const isDayTime = currentWeather.IsDayTime ? 'Day' : 'Night'
    return (
        <>

            <div key={index} className="weather-forecast__item">
                <p className="weather-forecast__day">{moment(day.Date).format('ddd')}</p>
                <p className="weather-forecast__icon"><i className={`wi icon-accu${day.Day.Icon} `}></i></p>
                <p className="weather-forecast__temp">{temp ? `${Math.round(day.Temperature.Minimum.Value)} °F` : `${tempConverter(Math.round(day.Temperature.Minimum.Value))} °C`}</p>
                <p className="weather__forecast__text">{day[isDayTime].IconPhrase}</p>
            </div>

        </>
    )
}

export default DayCardComponent
