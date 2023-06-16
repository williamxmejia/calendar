import React from 'react'
import { useState, useEffect } from 'react'

function RenderAllDays(props) {
    const [dates, setArrayOfDates] = useState([])

    function getAllDays() {
        let currentDate = props.currentMonth.startOf(props.view).weekday(0)
        // let currenWeek = props.currentMonth.startOf(props.view).weekday()
        const nextMonth = props.currentMonth.add(1, props.view)

        let endDate = props.view === "week" ? nextMonth.startOf(props.view).weekday(5) : nextMonth.startOf(props.view).weekday(6)
        

        let allDates = []
        let weekDates = []

        let weekCounter = 1
        let dayCounter = 0
        let b = props.currentMonth.startOf(props.view).weekday(0)

        while ((props.view === "week" && b.isBefore(endDate)) || (props.view === "month" && b.isBefore(endDate) || b.isSame(endDate, "day"))) {
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

    function renderCells() {
        const rows = []
        let days = []
    
        dates.map((week) => {
          week.map((d) => {
            days.push(<div key={d.day} className="calendar-in">{d.day}</div>)
          })
          rows.push(days)
          days = []
        })
    
        return rows
      }
    
    useEffect(() => {
        getAllDays(props.view)
    }, [props.currentMonth])

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
            {renderCells()}
        </>
      )
  }



export default RenderAllDays