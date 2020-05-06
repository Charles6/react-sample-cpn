import React, {useState} from 'react';
import cx from 'classnames';

function Links() {
  const [link, setLink] = useState([
    {label:"Github",url:"https://github.com/Charles6"},
    {label:"MDN web docs",url:"https://developer.mozilla.org/en-US/"},
    {label:"App libs list",url:"https://applibslist.xyz/"},
    {label:"JSON placeholder",url:"https://jsonplaceholder.typicode.com/"},
    {label:"unDraw",url:"https://undraw.co/illustrations"},
    {label:"Codepen",url:"https://codepen.io/"},
    {label:"JS utilities examples",url:"https://1loc.dev"},
    {label:"epoch converter",url:"https://www.epochconverter.com/"},
    {label:"CSS FX",url:"https://cssfx.dev/"},
    {label:"HTML color codes",url:"http://htmlcolorcodes.com/"}
  ]);

  return (
    <div className={cx('box', 'link-box')}>
      <h3>便利なリンク</h3>
      { link.map(linkInfo => (
        <a key={linkInfo.url} target="_blank" rel="noopener noreferrer" href={linkInfo.url}>{linkInfo.label}</a>
      ))
      }
    </div>
  );
}

export default Links;