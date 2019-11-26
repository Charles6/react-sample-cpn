import React from 'react';
import cx from 'classnames';

function Links() {
    return (
      <div className={cx('box', 'link-box')}>
        <h3>Useful Links</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Charles6">Github</a>
        <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/">MDN web docs</a>
        <a target="_blank" rel="noopener noreferrer" href="https://applibslist.xyz/">App Libs List</a>
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/">CodePen</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.epochconverter.com/">Epoch Converter</a>
        <a target="_blank" rel="noopener noreferrer" href="https://cssfx.dev/">CSS FX</a>
        <a target="_blank" rel="noopener noreferrer" href="http://htmlcolorcodes.com/">HTML color codes</a>
      </div>
    );
  }
  
  export default Links;