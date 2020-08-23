import React from 'react';
import $ from "jquery";
import { isMobile } from "../../index.js";
import styles from "./styles.scss";
import Item from './item.jsx';

import profile_image from "../../media/profile_image.jpg";


async function geLatestWork(setState) {
    const response = await fetch('./public/latest.json');
    const data = await response.json();
    setState(data);
}


function popup() {
    const [state, setState] = React.useState({ 'latest': [] });
    const divStyle = {
        backgroundImage: `url(${profile_image})`,
    };

    React.useEffect(() => {
        geLatestWork(setState)
    }, []);

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
                {state.latest.map((value, index) => {
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
  if (isMobile()) {
    $("#latest-work").addClass(styles.expand);
  }
});


export default popup;