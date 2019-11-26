import React, {useEffect, useState} from 'react';
import cx from 'classnames';

import { getStoryIds, getStory } from './hnApi';
import Story from '../components/Story'

function NewFeed() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
      <div className={cx('box', 'news-box')}>
        <h3>Hacker News Stories</h3>
        {storyIds.map(storyIds => (
          <Story key={storyIds} storyId={storyIds}/>
        ))}
      </div>

    );
  }
  
  export default NewFeed;