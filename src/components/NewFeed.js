import React, {useEffect, useState} from 'react';
import cx from 'classnames';

import { getStoryIds, getStory } from './hnApi';

function NewFeed() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);

  return (
      <div className={cx('box', 'news-box')}>
        {JSON.stringify(storyIds)}
      </div>
    );
  }
  
  export default NewFeed;