import React from 'react';
import $ from "jquery";
import styles from "./styles.scss";
import Item from './item.jsx';

import profile_image from "../../media/profile_image.jpg";

// TODO: later create this as an API
const BASE_WORK = [
  {
    "title": "B-Roll: Shimla, the summer capital",
    "link": "https://youtu.be/CTeCtSxgVzc",
    "type": "youtube"
  },
  {
    "title": "Minimix: Feeling Homesick",
    "link": "https://youtu.be/CTeCtSxgVzc",
    "type": "mixcloud"
  },
  {
    "title": "How I remember 10 years of my life",
    "link": "https://medium.com/@NbilzDy/how-i-remembered-10-years-of-my-life-2b6649a59027",
    "type": "medium"
  },
  {
    "title": "Jaipur, The pink city (Cinematic)",
    "link": "https://youtu.be/sEotv7TK8ns",
    "type": "youtube"
  }
];


function popup() {
  const divStyle = {
    backgroundImage: `url(${profile_image})`,
  };

  return (
    <div>
      <div id="latest-work" className={styles.icon} onClick={ e => { $(e.currentTarget).addClass(styles.expand)}}>
        <div className={styles.from}>
          <div className={styles["from-contents"]}>
            <div className={styles.plus}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
            </div>
          </div>
        </div>
        <div className={styles.to}>
          <div className={styles["to-contents"]}>
            <div className={styles.top}>
              <div
                className={`${styles["avatar-large"]} ${styles.me}`}
                style={divStyle}
              ></div>
              <div className={styles["name-large"]}>Nabil Sutjipto</div>
              <div className={styles["x-touch"]} onClick={ e => { $(`.${styles.icon}`).removeClass(styles.expand); e.stopPropagation();}}>
                <div className={styles.x}>
                  <div className={styles.line1}></div>
                  <div className={styles.line2}></div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              {BASE_WORK.map((value, index) => {
                return <Item key={index} link={value.link} type={value.type} title={value.title}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


$(function() {
  if (window.location.href.indexOf("#latest") > -1) {
    $("#latest-work").addClass(styles.expand);
  }
});


export default popup;