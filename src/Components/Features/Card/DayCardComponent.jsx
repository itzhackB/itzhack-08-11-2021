import React from 'react'
import { useSelector } from 'react-redux'
import { tempConverter } from '../../../utils/tempConverter';

var moment = require('moment');

const DayCardComponent = ({ day }) => {
    const currentWeather = useSelector((state) => state.weather.current)
    const temp = useSelector((state) => state.temp)

    let newDate = new Date();
    const weekday = day.Date * 1000
    newDate.setTime(weekday)

    const isDayTime = currentWeather.IsDayTime ? 'Day' : 'Night'
    return (

        <div className="col-sm-2">
            <div className="card">
                <p className="card-title"><i className={`wi icon-accu${day[isDayTime].Icon}`}></i></p>
                <p className="text-muted">{moment(day.Date).format('ddd')}</p>
                {
                    temp? <h2>{Math.round(day.Temperature.Minimum.Value)} °F</h2>
                    :
                    <h2>{tempConverter(Math.round(day.Temperature.Minimum.Value))} °C</h2>
                }
                <div className="card-body">
                    <p className="card-text">{day[isDayTime].IconPhrase}</p>
                </div>
            </div>
        </div>
    )
}

export default DayCardComponent
