import React from 'react'
import PropTypes from 'prop-types'
const Button=({
    color,
    text,
    onClick
})=> {




  return (
    <button className='btn btn-primary'
    onClick={onClick}
    style={{backgroundColor:color}}
    >{text}</button>
  )
}

Button.defaultProps ={
    color:'steelBlue',
    text:'Click here'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func,
}

export default Button
