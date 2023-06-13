import React from "react";

function Calendar() {
  const days = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ];

  let i = 1


  return (
    <>
      <div className="cont-box">
        <h1>June</h1>
        <div className="calendar-head">
          {days.map((day) => (
            <div>
              <div className="calendar-days">{day}</div>
              {/* <div className="calendar-in">{i++}</div> */}
            </div>

          ))}
          {/* <div className="calendar-in">2</div> */}

        </div>
        <div className="calendar-head">
          <div className="calendar-in">1</div>
          <div className="calendar-in">2</div>
          <div className="calendar-in">3</div>
          <div className="calendar-in">4</div>
          <div className="calendar-in">5</div>
          <div className="calendar-in">6</div>
          <div className="calendar-in">7</div>
          <div className="calendar-in">8</div>
          <div className="calendar-in">9</div>
          <div className="calendar-in">10</div>
          <div className="calendar-in">11</div>
          <div className="calendar-in">12</div>
          <div className="calendar-in">13</div>
          <div className="calendar-in">14</div>
          <div className="calendar-in">15</div>
          <div className="calendar-in">16</div>
          <div className="calendar-in">17</div>
          <div className="calendar-in">18</div>
          <div className="calendar-in">19</div>
          <div className="calendar-in">20</div>
          <div className="calendar-in">21</div>
          <div className="calendar-in">22</div>
          <div className="calendar-in">23</div>
          <div className="calendar-in">24</div>
          <div className="calendar-in">25</div>
          <div className="calendar-in">26</div>
          <div className="calendar-in">27</div>
          <div className="calendar-in">28</div>
          <div className="calendar-in">29</div>
          <div className="calendar-in">30</div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
