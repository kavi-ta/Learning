import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button'


const Header=({
    title,
    onAdd,
    showAdd
})=> {    

    
    
    return (
    <header className='header'>
    <h1 >Task Tracker {title}</h1>
    <Button color='green' text={showAdd? "Close":"Add Task"} onClick={onAdd} />
    </header>
    
  )
}

// Header.defaultProps = {
//     title:'Trask Tracker'
// }

Header.propTypes = {
    title: Proptypes.string.isRequired
}

// css 
// const headingStyle = {
//     color:"red",
//     backgroundColor:'bisque'
// }
export default Header