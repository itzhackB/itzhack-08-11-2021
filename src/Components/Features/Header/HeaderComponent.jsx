import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import isDev from '../../../utils/environment'
import { setTheme } from '../../../Redux/actions/themeAction'
import { tempUnitAction } from '../../../Redux/actions/tempUnitAction'

const HeaderComponent = () => {
    const favorites = useSelector((state) => state.favorites)
    const temp = useSelector((state) => state.temp)

    const dispatch = useDispatch()
    return (
        <div className="headerContainer" >
            {isDev() ? <Link to="/itzhack-08-11-2021">
                <h1 className="weatherTitle" style={{ color: "white" }}>Weather App</h1>
            </Link>
                :
                <Link to="https://itzhackb.github.io/itzhack-08-11-2021/#/">
                    <h1 className="weatherTitle" style={{ color: "white" }}>Weather App</h1>
                </Link>
            }

            <div style={{ display: 'flex' }}>
                {isDev() ? <Link to="/itzhack-08-11-2021/favorites">
                    <FontAwesomeIcon icon={faBell} style={{ color: "white", fontSize: '1em' }} />
                    <div style={{
                        color: 'white',
                        fontSize: '1em',
                        position: 'relative',
                        bottom: '10%',
                        left: '25%',
                    }}>
                        {favorites.length}</div>
                </Link>
                    :
                    <Link to="https://itzhackb.github.io/itzhack-08-11-2021/#/favorites">
                        <FontAwesomeIcon icon={faBell} style={{ color: "red", fontSize: '1em' }} />
                        <div style={{
                            color: 'white',
                            fontSize: '1em',
                            position: 'relative',
                            bottom: '10%',
                            left: '25%',
                        }}>
                            {favorites.length}</div>
                    </Link>
                }

                {
                    <button style={{
                        backgroundColor: 'transparent',
                        borderWidth: '0',
                        padding: 0,
                        position: 'relative',
                        bottom: '40%',
                        left: '25%'
                    }} 
                        onClick={() => dispatch(tempUnitAction())}><div>{temp ? '\xB0C' : '\xB0F'}</div></button>
                }

            </div>



        </div >
    )
}

export default HeaderComponent
