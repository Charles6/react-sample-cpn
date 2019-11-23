import React from 'react';
import cx from 'classnames';

function Links() {
    return (
      <div className={cx('box', 'link-box')}>
        <a target="_blank" href="https://github.com/Charles6">Github</a>
        <a target="_blank" href="https://developer.mozilla.org/en-US/">MDN web docs</a>
        <a target="_blank" href="https://codepen.io/">CodePen</a>
        <a target="_blank" href="https://www.epochconverter.com/">Epoch Converter</a>
        <a target="_blank" href="https://cssfx.dev/">CSS FX</a>
        <a target="_blank" href="http://htmlcolorcodes.com/">HTML color codes</a>
      </div>
    );
  }
  
  export default Links;