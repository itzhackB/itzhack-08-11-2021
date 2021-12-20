import React from 'react'
import { getCityByGeo } from '../../../Redux/actions/weatherActions'
import { GetdeafultCity } from '../../../Redux/actions/weatherActions'
import { Dialog } from '@mui/material'
import { useDispatch } from 'react-redux'
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'


const DialogComponent = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch()

    const handleApprove = () => {
        setIsOpen(false);
        dispatchLocation();
    }

    // const dispatchLocation = () => {
    //     const location = getCoords()
    //         .then(dataLocation => {
    //             const city = getCityByGeo(dataLocation.lat, dataLocation.lan)
    //             dispatch(city)
    //         })
    //         .catch(err=>{
    //             dispatch("Tel Aviv")
    //         })
    // }

    const dispatchLocation = async () => {
        try {
            const location = await getCoords()
            const city = getCityByGeo(location.lat, location.lan)
            dispatch(city)
        } catch (error) {
            const deafultCity = GetdeafultCity("Tel Aviv")
            dispatch(deafultCity)
        }

    }

    const getCoords = async () => {

        const locationPromise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                location => resolve(location.coords),
                err => {
                    reject(err)
                    setIsOpen(false)
                }
            )
        })

        return locationPromise

    }
    return (
        <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Confrim get location"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to get weather by your location?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={() => setIsOpen(false)}>Disagree</button>
                <button onClick={handleApprove} autoFocus>
                    Agree
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogComponent
