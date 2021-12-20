import React, {useContext} from 'react'
import WeekContainer from '../../Features/WeekContainer/WeekContainer';
import AutocompleteComponent from '../../Features/Autocomplete/AutocompleteComponent';
import GetMyLocation from '../../Features/GetMyLocation/GetMyLocation';
import { ThemeContext } from '../../../context/themeContext';



const HomeComponent = () => {

    const {toggle} = useContext(ThemeContext)

    return (
        <div className="home"  >
            <AutocompleteComponent toggle={toggle}/>
            <GetMyLocation toggle={toggle}/>
            <WeekContainer toggle={toggle}/>
        </div>
    )
}

export default HomeComponent
