import React from 'react'

function BtnComponent(props) {
  return (
    <div className="calendar-head">
        <button onClick={props.back} type="button">
        {"<"}
        </button>
        <button onClick={props.next} type="button">
        {">"}
        </button>
    </div>
  )
}

export default BtnComponent