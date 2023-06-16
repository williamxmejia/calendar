import React from 'react'

function BtnComponent(props) {
  return (
    <div className="header-sad">
        <h1>{props.month[props.currentMonth]} {props.currentYear}</h1>
        <div className="month-btn">
          <button onClick={props.back} type="button">{"<"}</button>
          <button onClick={props.next} type="button">{">"}</button>
        </div>

    </div>
  )
}

export default BtnComponent