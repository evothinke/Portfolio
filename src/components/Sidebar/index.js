import './index.scss'
import LogoS from '../../assets/images/logos.png'
import LogoSubtitle from '../../assets/images/logosub.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);
    return (

        <div className='nav-bar'>
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="August" />
            </Link>
        </div>
    )
}
export default Sidebar