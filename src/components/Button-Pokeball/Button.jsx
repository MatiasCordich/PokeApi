import React from 'react'

import './Button.css'

const Button = ({onPress}) => {
    return (
        <div className='button_section'>
            <button type='button' className='button' onClick={onPress}> </button>
            Click Here
        </div>
    )
}

export default Button
