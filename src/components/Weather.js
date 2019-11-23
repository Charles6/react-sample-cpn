import React, {useState} from 'react';
import cx from 'classnames';

function Weather() {
  const [temp, setTemp] = useState();
  const [type, setType] = useState();
  const [tempLo, setTempLo] = useState();
  const [tempHi, setTempHi] = useState();

  fetch("https://api.openweathermap.org/data/2.5/weather?zip=90046,us&APPID=33d0a0d0219bef1e831ca05c509cff49")
    .then(function(data) {
      return data.json();
    }).then(function(data) {
      var celsiusTemp = (data.main.temp-273.15).toFixed(1);

      setTemp(celsiusTemp);
      setType(data.weather[0].description);
      setTempLo((data.main.temp_min-273.15).toFixed(1));
      setTempHi((data.main.temp_max-273.15).toFixed(1));
    });


    return (
      <div className={cx('box', 'weather-box')}>
        {type} <br />
        {temp} &deg;C <br />
        low: {tempLo} &deg;C | high: {tempHi} &deg;C
      </div>
    );
  }
  
  export default Weather;