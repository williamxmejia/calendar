import React from 'react'

function RenderDays(props) {
    const dateFormat = "ddd"
    const days = []
    for (let i = 0; i < 7; i++) {
        days.push(
          <div className="calendar-days" key={i}>
            {props.today.weekday(i).format(dateFormat)}
          </div>
        );
      }
      return days
}

export default RenderDays