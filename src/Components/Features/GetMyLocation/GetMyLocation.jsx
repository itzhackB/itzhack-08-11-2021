import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getCityByGeo, GetdeafultCity } from '../../../Redux/actions/weatherActions'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import DialogComponent from '../Dialog/DialogComponent'

const GetMyLocation = ({ toggle }) => {

    const [isOpen, setIsOpenDialog] = useState(false)
    return (
        <div className="location_logo">

            <button onClick={() => setIsOpenDialog(true)}>
                <FontAwesomeIcon style={{ height: "2em", fontSize: "2em", color: toggle ? "black" : "white" }} icon={faMapMarkerAlt} />
            </button>

            <DialogComponent
                isOpen={isOpen}
                setIsOpen={setIsOpenDialog}
            />

        </div>
    )
}

export default GetMyLocation
