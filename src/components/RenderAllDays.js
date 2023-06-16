import React from 'react'
import { useState, useEffect } from 'react'

function RenderAllDays(props) {
    const [dates, setArrayOfDates] = useState([])

    function getAllDays() {
        let currentDate = props.currentMonth.startOf("month").weekday(0)
        const nextMonth = props.currentMonth.add(1, "month")
        const endDate = nextMonth.startOf("month").weekday(6)

        let allDates = []
        let weekDates = []

        let weekCounter = 1
        let dayCounter = 0
        let b = props.currentMonth.startOf("month").weekday(0)

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
    
    useEffect(() => {
        getAllDays()
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