import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import isTodayPlugin from "dayjs/plugin/isToday"
import objectPlugin from "dayjs/plugin/toObject"
import localeData from "dayjs/plugin/localeData"
import RenderDays from "./RenderDays"
import RenderAllDays from "./RenderAllDays"
import BtnComponent from "./BtnComponent"

dayjs.extend(weekdayPlugin)
dayjs.extend(isTodayPlugin)
dayjs.extend(objectPlugin)
dayjs.extend(localeData)

function Calendar() {
  const currDate = dayjs()
  const months = dayjs.months()
  const [currentMonth, setCurrentMonth] = useState(currDate)

  function monthHandlerBack() {
    let back = currentMonth.subtract(1, "month")
    setCurrentMonth(back)
  }

  function monthHandlerForward() {
    let next = currentMonth.add(1, "month")
    setCurrentMonth(next)
  }

  return (
    <>
      <div className="cont-box">
        <h1>{months[currentMonth.month()]} {currentMonth.year()}</h1>
        {/* {renderButtons()} */}
        <BtnComponent next = {monthHandlerForward} back={monthHandlerBack}/>
        <div className="calendar-head">
          <RenderDays today = {currDate} />
          <RenderAllDays currentMonth = {currentMonth} />

        </div>
      </div>
    </>
  )
}

export default Calendar
