import React from 'react'
import {Link} from 'react-router-dom'

function Button({name,block}) {
  return (
    <>
        <Link to='/' className={`btn ${block ? 'btn-block' : ''} `}>{name}</Link>
    </>
  )
}

Button.defaultProps = {
  name: "Go Back"
}

export default Button