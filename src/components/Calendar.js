import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import isTodayPlugin from "dayjs/plugin/isToday"
import objectPlugin from "dayjs/plugin/toObject"
import localeData from "dayjs/plugin/localeData"

dayjs.extend(weekdayPlugin)
dayjs.extend(isTodayPlugin)
dayjs.extend(objectPlugin)
dayjs.extend(localeData)

function Calendar() {
  const currDate = dayjs()
  const months = dayjs.months()
  const [currentMonth, setCurrentMonth] = useState(currDate)
  const [dates, setArrayOfDates] = useState([])

  function renderDays() {
    const dateFormat = "ddd"
    const days = []

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="calendar-days" key={i}>
          {currDate.weekday(i).format(dateFormat)}
        </div>
      );
    }
    return days
  }

  function getAllDays() {
    let currentDate = currentMonth.startOf("month").weekday(0)
    const nextMonth = currentMonth.add(1, "month")
    const nextMonthEnd = currentMonth.add(1, "month").month()
    // const startDate = dayjs(`2023-07-01`)
    const endDate = nextMonth.startOf("month").weekday(6)

    let allDates = []
    let weekDates = []

    let weekCounter = 1
    let dayCounter = 0
    let b = currentMonth.startOf("month").weekday(0)

    while (b.isBefore(endDate) || b.isSame(endDate, "day")) {
      const formated = formatDateObject(b)
      weekDates.push(formated)

      if (weekCounter === 7) {
        allDates.push(weekDates)
        weekDates = []
        weekCounter = 0
      }

      weekCounter++
      dayCounter++
      b = currentDate.add(dayCounter, "day")
    }
    setArrayOfDates(allDates)
  }

  useEffect(() => {
    getAllDays()
  }, [currentMonth])

  function renderCells() {
    const rows = []
    let days = []

    dates.map((week) => {
      week.map((d) => {
        days.push(<div className="calendar-in">{d.day}</div>)
      })
      rows.push(days)
      days = []
    })

    return rows
  }

  function renderButtons() {

    return (
      <div className="calendar-head">
      <button onClick={monthHandlerBack} type="button">
        {"<"}
      </button>
      <button onClick={monthHandlerForward} type="button">
        {">"}
      </button>
    </div>
    )
  }

  function monthHandlerBack() {
    let back = currentMonth.subtract(1, "month")
    setCurrentMonth(back)
    console.log(back)
  }

  function monthHandlerForward() {
    let next = currentMonth.add(1, "month")
    setCurrentMonth(next)
    console.log(next)
  }

  function formatDateObject(date) {
    const clonedObject = { ...date.toObject() }

    const formatObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentDay: date.isToday(),
    }

    return formatObject
  }

  return (
    <>
      <div className="cont-box">
        <h1>{months[currentMonth.month()]}</h1>
        {renderButtons()}
        <div className="calendar-head">
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </>
  )
}

export default Calendar
