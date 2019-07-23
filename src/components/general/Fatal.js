import React from 'react'
import './Fatal.css';

const Fatal = (props) => {
  return (
    <div className="fatal-container">
        <div id="clouds">
            <div className="cloud x1"></div>
            <div className="cloud x1_5"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>            
        </div>
        <div className='c'>
            <div className='_404'>404</div>            
            <div className='_1'>{ props.mensaje }</div>
            { /*<div className='_2'>{ props.mensaje }</div>*/ }
        </div>
    </div>
  )
}

export default Fatal
