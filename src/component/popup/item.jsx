import React from 'react';
import styles from "./styles.scss";
import ReactSVG from 'react-svg';

import youtube_icon from '../../media/iconfinder_Youtube.svg';
import medium_icon from '../../media/medium.svg';
import mixcloud_icon from '../../media/iconfinder_mixcloud.svg';

const mapping = {
  "youtube": youtube_icon,
  "medium": medium_icon,
  "mixcloud": mixcloud_icon
}

function item(props) {
  return (
    <div className={styles.row}>
      <ReactSVG
        className={styles.social}
        src={mapping[props.type]}
        svgStyle={{ width: 25, height: 25 }} />
      <div className={styles.link}><a href={props.link}>{props.title}</a></div>
    </div>
  );
}

export default item;