import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFavorite } from '../../../Redux/actions/favoritesAction'
import { GetdeafultCity } from '../../../Redux/actions/weatherActions'
import isDev from '../../../utils/environment'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


const FavoritesComponent = () => {

    const GeoUrl = "http://dataservice.accuweather.com/locations/v1/"
    const API_KEY = "SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W"
    const GOOGLE_KEY = 'AIzaSyA7ZkFbQxpWohmt4LzHLpYw2AyuKfwxg-A'
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    const [favoriteList, setFavoriteList] = useState([])

    let tempFavoriteList = []
    let history = useHistory()

    async function favoritesGeo() {

        const favoriteList = await Promise.all(favorites.map(favorite =>
            axios.get(`${GeoUrl}${favorite.id}?apikey=${API_KEY}`)));
        return favoriteList
    }

    function Map() {
        return (
            <GoogleMap
                defaultZoom={1}
                defaultCenter={{ lat: 1, lng: 1 }}
            />
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map))



    useEffect(() => {
        const fetchFavorites = async () => {
            const CURRENT_URL = 'https://dataservice.accuweather.com/currentconditions/v1/'
            const API_KEY = 'SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W'
            for await (const fav of favorites) {
                const data = await axios.get(`${CURRENT_URL}${fav.id}?apikey=${API_KEY}`)
                tempFavoriteList[fav.id] = data.data[0]
            }
            setFavoriteList(tempFavoriteList)
        }
        fetchFavorites()
    }, [])


    const changeDeafultCity = async (favoriteCity) => {
        await dispatch(GetdeafultCity(favoriteCity))
        history.push(isDev ? "/itzhack-08-11-2021" : "https://itzhackb.github.io/itzhack-08-11-2021/#/")
    }

    return (
        <div>
            <div className="weather-forecast__list" style={{ position: "relative", top: "100px" }}>
                {favorites.length > 0 ? favorites.map((favorite, index) =>
                    <div
                        className="weather-forecast__item"
                        key={index}>
                        <p className="weather-forecast__day">{favorite.name}</p>
                        <p className="weather__forecast__text">{favoriteList[favorite.id]?.WeatherText}</p>
                        <p className="weather-forecast__temp">{favoriteList[favorite.id]?.Temperature.Metric.Value}</p>
                        <button
                            onClick={() => dispatch(deleteFavorite(favorite.id))}>
                            Remove Favorite
                        </button>
                        <button
                            style={{ display: "flex", justifyContent: "center" }}
                            onClick={() => changeDeafultCity(favorite.name)}>
                            Set Deafult City
                        </button>
                    </div>
                ) : <h1 className="favorites_logo" >No Favorites To Show</h1>}
                <button onClick={() => console.log(favoritesGeo())}>Check</button>

            </div>
            <div style={{ height: "50vh", width: "50vw" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>

        </div>
    )
}

export default FavoritesComponent
