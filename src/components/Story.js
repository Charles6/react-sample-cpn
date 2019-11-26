import React, {useEffect, useState} from 'react';
import cx from 'classnames';

import { getStory } from './hnApi';


function Story({ storyId }) {
    const [ story, setStory] = useState({});

    useEffect(()=>{
        getStory(storyId)
            .then(data => data && data.url && setStory(data));
    }, []);

    const convertTime = (unixTime) => {
        let currentTime = new Date();
        let cHour = currentTime.getHours();

        let dateObj = new Date(unixTime * 1000);
        let date = dateObj.getUTCDate();
        let month = dateObj.getUTCMonth(); 
        let year = dateObj.getUTCFullYear();
        let hour = dateObj.getUTCHours();
        let minutes = dateObj.getUTCMinutes();

        let diff = hour - cHour;
        let realHour = hour - diff;

        let cleanDateTime = date + "/" + month + "/" + year + " - " +realHour.toString().padStart(2, '0') + ':' +  
        minutes.toString().padStart(2, '0');

        return cleanDateTime;
    }

  return story && story.url ? (
      <div className={cx('story')}>
          <a target="_blank" rel="noopener noreferrer" href={story.url}>
            {story.title}
          </a>
          {convertTime(story.time)} - {story.by}
      </div>
    ):"";
  }
  
  export default Story;