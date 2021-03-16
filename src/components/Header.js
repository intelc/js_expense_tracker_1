import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserAlt} from 'react-icons/fa'

const Header = ({name,color}) => {
    return (
        < header className='header'>
            <FaUserAlt style={{color:'black', cursor:'pointer'}} />
            <h1 style= {{color:color}}>{name}</h1>
            <GiHamburgerMenu style={{color:'black', cursor:'pointer'}} />
        </header>
        
    )
}

export default Header
