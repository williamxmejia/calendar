import React from 'react'

function RenderDays(props) {
    const dateFormat = "dd"
    const days = []
    for (let i = 0; i < 7; i++) {
        days.push(
          <div className="calendar-days" key={i}>
            {props.today.weekday(i).format(dateFormat).charAt(0)}
          </div>
        );
      }
      return days
}

export default RenderDays