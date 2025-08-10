import React from 'react'
import './icon_example.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMugSaucer, faUserGraduate} from '@fortawesome/free-solid-svg-icons'
import {faSquare} from '@fortawesome/free-regular-svg-icons'

const Icon_Example = () => {
    return (
        <div className='icon-div'>
            <FontAwesomeIcon icon={faFacebookMessenger} className='icon-all' />
            <FontAwesomeIcon icon={faTwitter} className='icon-all'/>
            <FontAwesomeIcon icon={faMugSaucer} className='icon-all'/>
            <FontAwesomeIcon icon={faSquare} className='icon-all'/>
            <FontAwesomeIcon icon={faUserGraduate} className='icon-all'/>
        </div>
    )
}

export default Icon_Example
