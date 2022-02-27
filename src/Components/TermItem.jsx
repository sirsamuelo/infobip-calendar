import React from 'react'
import {Link} from 'react-router-dom'

function TermItem({next,term,random}) {
  let brekForLunch = term.includes('16:00') || term.includes('11:00')
  let closed =  term.includes('closed')
  let myClass = closed ? 'closed' : brekForLunch ? 'break' :  random ? 'busy' : 'free'
  return (
      <Link to={term} className={`appointment ${myClass}`} onClick={ (event) => closed ? event.preventDefault() : brekForLunch ? event.preventDefault() : event }>{`${term}-${next}`}</Link>
  )
}

export default TermItem