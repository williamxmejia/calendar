import React from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import isTodayPlugin from "dayjs/plugin/isToday"
import objectPlugin from "dayjs/plugin/toObject"

function Calendar() {
  dayjs.extend(weekdayPlugin)
  dayjs.extend(isTodayPlugin)
  dayjs.extend(objectPlugin)

  const currDate = dayjs()
  

  function renderDays() {
    const dateFormat = "ddd"
    const days = []

    for (let i = 0; i < 7; i++) {
      days.push(
          <div className="calendar-days" key={i}>{currDate.weekday(i).format(dateFormat)}</div>
      )
    }

    return days
  }
  
  return (
    <>
      <div className="cont-box">
        <h1>June</h1>
        <div className="calendar-head">
          {renderDays()}
        </div>
      </div>
    </>
  )
}

export default Calendar
