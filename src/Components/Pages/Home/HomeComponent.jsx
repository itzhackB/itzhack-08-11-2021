import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { GetdeafultCity } from '../../../Redux/actions/weatherActions';
import WeekContainer from '../../Features/WeekContainer/WeekContainer';
import AutocompleteComponent from '../../Features/Autocomplete/AutocompleteComponent';



const HomeComponent = () => {

    const dispatch = useDispatch()
    const theme = useSelector((state)=>state.theme)
    
    useEffect(() => {
        dispatch(GetdeafultCity('Tel aviv'))
    }, [dispatch])

 
    return (
        <div style={{ background: 'linear-gradient(45deg,#469FFF,#A39AF9)'}}>
            <AutocompleteComponent/>
            <WeekContainer/>
        </div>
    )
}

export default HomeComponent
