import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GetdeafultCity } from '../../../Redux/actions/weatherActions';
import Alert from '@mui/material/Alert';



const AutocompleteComponent = (e) => {
    const dispatch = useDispatch()
    const autoCompleteURL = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='
    const api_key = 'SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W'
    const [suggestions, setSuggestions] = useState([])
    const [erros, setError] = useState(true)
    const [connectionError, setConnectionError] = useState(false)

    const serachCity = (e) => {
        let value = e.target.value
        let english = /[^A-Za-z]/ig

        if (!english.test(value)) {
            setError(true)
            fetch(`${autoCompleteURL}${api_key}&q=${value}`)
                .then((res) => res.json())
                .then((response) => {
                    if (response.Message) {
                        setConnectionError(true)
                        setSuggestions([])
                    } else {
                        setConnectionError(false)
                        setSuggestions(response)
                    }
                })
        }
        else {
            setError(false)
        }
    }
    return (

        <div className="autoComplete">
            {erros ? "" : <Alert severity="error">English letters only.</Alert>}
            {connectionError ? <Alert severity="error">API ERROR. Try Later</Alert> : ""}

            <Autocomplete
                id="free-solo-demo"
                size="medium"
                color='white'
                sx={{ width: 500 }}
                options={suggestions ? suggestions.map((option) => option.LocalizedName) : "hi"}
                onChange={(e, value) => dispatch(GetdeafultCity(value))}
                renderInput={(params) =>
                    <TextField onChange={serachCity} {...params} label="Search city" key={params.Key} style={{ background: 'white' }} />}
            />


        </div>
    )
}

export default AutocompleteComponent
