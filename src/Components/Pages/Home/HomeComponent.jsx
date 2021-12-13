import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { GetdeafultCity } from '../../../Redux/actions/weatherActions';
import WeekContainer from '../../Features/WeekContainer/WeekContainer';
import AutocompleteComponent from '../../Features/Autocomplete/AutocompleteComponent';



const HomeComponent = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetdeafultCity('Tel aviv'))
    }, [dispatch])

    return (
        <div className="home"  >
            <AutocompleteComponent/>
            <WeekContainer/>
        </div>
    )
}

export default HomeComponent
