import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFavorite } from '../../../Redux/actions/favoritesAction'
import axios from 'axios'


const FavoritesComponent = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    const [favoriteList, setFavoriteList] = useState([])

    let tempFavoriteList = []
    
   
    useEffect(() => {
        const fetchFavorites = async () => {
            const CURRENT_URL = 'https://dataservice.accuweather.com/currentconditions/v1/'
            const API_KEY = 'SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W'
            for await (const fav of favorites) {
                const data = await axios.get(`${CURRENT_URL}${fav.id}?apikey=${API_KEY}`)
                tempFavoriteList[fav.id] = data.data[0]
            }
            setFavoriteList(tempFavoriteList)
            console.log(favoriteList);
        }
        fetchFavorites()
    }, [])



    return (
        <div>
            <h1>Favorites</h1>
            <div className="favoritesContainer">
                {favorites.map((favorite, index) =>
                    <div
                        className="favoritesItem"
                        key={index}>
                        <p>{favorite.name}</p>
                        <p>{favoriteList[favorite.id]?.WeatherText}</p>
                        <p>{favoriteList[favorite.id]?.Temperature.Metric.Value}</p>
                        <button
                            onClick={() => dispatch(deleteFavorite(favorite.id))}>
                            Remove Favorite
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FavoritesComponent
