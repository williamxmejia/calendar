import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import isTodayPlugin from "dayjs/plugin/isToday"
import objectPlugin from "dayjs/plugin/toObject"
import localeData from "dayjs/plugin/localeData"
import weekOfYear from "dayjs/plugin/weekOfYear"
import weekYear from "dayjs/plugin/weekYear"
import RenderDays from "./RenderDays"
import RenderAllDays from "./RenderAllDays"
import BtnComponent from "./BtnComponent"

dayjs.extend(weekdayPlugin)
dayjs.extend(isTodayPlugin)
dayjs.extend(objectPlugin)
dayjs.extend(localeData)
dayjs.extend(weekYear)
dayjs.extend(weekOfYear)

function Calendar(props) {
  const currDate = dayjs()
  const months = dayjs.months()
  const [currentMonth, setCurrentMonth] = useState(currDate)

  function monthHandlerBack() {
    let back = currentMonth.subtract(1, props.type)
    setCurrentMonth(back)
  }

  function monthHandlerForward() {
    let next = currentMonth.add(1, props.type)
    setCurrentMonth(next)
  }

  return (
    <>
      <div className="cont-box">
        <BtnComponent next = {monthHandlerForward} back={monthHandlerBack} month = {months} currentMonth = {currentMonth.month()}currentYear = {currentMonth.year()}/>
        <div className="calendar-head">
          <RenderDays today = {currDate} />
          <RenderAllDays currentMonth = {currentMonth} view={props.type}/>
        </div>
      </div>
    </>
  )
}

export default Calendar
