import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GetdeafultCity } from '../../../Redux/actions/weatherActions';
import debounce from 'lodash.debounce'
import { Tooltip } from '@mui/material';


const AutocompleteComponent = ({ toggle }) => {
    const currentWeather = useSelector((state) => state.weather.current)
    const heroImage = `linear-gradient(rgba(83, 213, 245, 0.75),${toggle ? '#fff' : "rgb(0, 7, 24)"} ), url(${currentWeather.Photos[0].LandscapeLink.replace("_L_L", "_L_XXL")})`

    const dispatch = useDispatch()
    const autoCompleteURL = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='
    const api_key = 'SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W'
    const [suggestions, setSuggestions] = useState([])
    const [erros, setError] = useState(false)
    const [connectionError, setConnectionError] = useState(false)

    const serachCity = (e) => {
        let value = e.target.value
        let notEnglish = /[^A-Za-z]/ig

        if (!notEnglish.test(value)) {
            setError(false)
            fetch(`${autoCompleteURL}${api_key}&q=${value}`)
                .then((res) => res.json())
                .then((response) => {
                    const isError = !!response.Message
                    if (isError) {
                        setConnectionError(true)
                        setSuggestions([])
                    } else {
                        setConnectionError(false)
                        setSuggestions(response)
                    }
                })
        }
        else if (value === "") {
            setError(false)
        }
        else {
            setError(true)
        }

    }

    const debounceSearch = useCallback(debounce(serachCity, 500
        , []))

    return (
        <>
        
            <div className="autoComplete" style={{ backgroundImage: heroImage }}>
                <Tooltip
                    open={erros || connectionError}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={erros ? "English letters only." : "" || connectionError ? "API ERROR. Try Later" : ""} >

                    <Autocomplete
                        id="free-solo-demo"
                        size="medium"
                        color='white'
                        sx={{ width: 500 }}
                        options={suggestions ? suggestions.map((option) => option.LocalizedName) : ""}
                        onChange={(e, value) => dispatch(GetdeafultCity(value))}
                        renderInput={(params) =>
                            <TextField
                                onChange={debounceSearch} {...params} label="Search city" key={params.Key} style={{ background: 'white' }}
                                error={erros || connectionError}
                            />}
                    />
                </Tooltip>
            </div>
        </>
    )
}

export default AutocompleteComponent
