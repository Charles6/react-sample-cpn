import React, {useEffect, useState} from 'react';
import cx from 'classnames';

import { getStoryIds } from './hnApi';
import Story from '../components/Story'

function NewFeed() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
    const newsInterval = setInterval(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, 300000)
    return () => clearInterval(newsInterval);
  }, []);

  return (
      <div className={cx('box', 'news-box')}>
        <h3><a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/">ハッカーニュース</a></h3>
        <div className="new-stories">
          {storyIds.map(storyIds => (
            <Story key={storyIds} storyId={storyIds}/>
          ))}
        </div>
      </div>
    );
  }
  
  export default NewFeed;