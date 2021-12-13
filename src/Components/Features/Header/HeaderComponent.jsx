import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import isDev from '../../../utils/environment'
import { tempUnitAction } from '../../../Redux/actions/tempUnitAction'

const HeaderComponent = () => {
    const favorites = useSelector((state) => state.favorites)
    const temp = useSelector((state) => state.temp)

    const dispatch = useDispatch()
    return (
        <header className="header">
            <div className="container">
                <nav className="header-nav">

                    {isDev() ? <Link to="/itzhack-08-11-2021">
                        <h1 className="header__logo" style={{ color: "white" }}>Weather App</h1>
                    </Link>
                        :
                        <Link to="https://itzhackb.github.io/itzhack-08-11-2021/#/">
                            <h1 className="header__logo" style={{ color: "white" }}>Weather App</h1>
                        </Link>
                    }

                    <ul className="header__list">
                        <li>
                            {isDev() ? <Link to="/itzhack-08-11-2021/favorites">
                                <FontAwesomeIcon icon={faBell} style={{ color: "white", fontSize: '1em' }} />
                                <div className="header__favorite-num">
                                    {favorites.length}</div>
                            </Link>
                                :
                                <Link to="https://itzhackb.github.io/itzhack-08-11-2021/#/favorites">
                                    <FontAwesomeIcon icon={faBell} style={{ color: "red", fontSize: '1em' }} />
                                    <div className="header__favorite-num">
                                        {favorites.length}</div>
                                </Link>
                            }
                        </li>

                        <li>
                            <button
                            onClick={() => dispatch(tempUnitAction())}><div className="header__unit-icon">{temp ? '\xB0C' : '\xB0F'}</div></button>
                        </li>

                    </ul>

                </nav>
            </div>
        </header>

    )
}

export default HeaderComponent
