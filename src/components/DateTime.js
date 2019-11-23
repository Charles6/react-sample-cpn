import React, {useState} from 'react';
import cx from 'classnames';
import './DateTime.css';

function DateTime() {
  const [day, setDay] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const days = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];
  const months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十月'];

  setInterval(function() {
    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();

    setDay(days[d.getDay()]);
    setDate(d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear());
    setTime(hours+':'+minutes);

  }, 1000);


    return (
      <div className={cx('box', 'date-time-box')}>
        <div id="day">
          {day}
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