import React, {useState} from 'react';
import cx from 'classnames';
import '../components/DateTime.css';

function DateTime() {
  const [day, setDay] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const days = ['日','月','火','水','木','金','土'];
  const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十月'];

  setInterval(function() {
    let d = new Date();
    let minutes = d.getMinutes().toString().padStart(2, '0');
    let hours = d.getHours().toString().padStart(2, '0');

    setDay(days[d.getDay()]);
    setDate(d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear());
    setTime(hours+':'+minutes);
  }, 1000);


    return (
      <div className={cx('box', 'date-time-box')}>
        <div id="day">
          {day}<br/>曜<br/>日
        </div>
        <div id="date">
          {date}
        </div>
        <div id="time">
          {time}
        </div>
      </div>
    );
  }
  
  export default DateTime;