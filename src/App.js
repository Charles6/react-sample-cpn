import React from 'react';
import './App.css';
import cx from 'classnames';

import DateTime from './components/DateTime';
import Weather from './components/Weather';
import NewFeed from './components/NewFeed';
import Links from './components/Links';

function App() {
  return (
    <div className={cx("App",)}>
      <DateTime />
      <Weather />
      <NewFeed />
      <Links />
      
    </div>
  );
}

export default App;
