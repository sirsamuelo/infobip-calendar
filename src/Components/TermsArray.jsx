import React from 'react'
import TermItem from './TermItem'

function TermsArray({terms}) {
  function randomBusy(){
    return Math.random() > 0.70 ? true: false
  }

  return (
      <>
        {terms && terms.map((term,index,elements) => {
            let next,random;
            next = elements[index+1]
            random = randomBusy()
            if(next) return <TermItem key={index} term={term} next={next} random={random}/>
        })}
    </>
  )
}

export default TermsArray