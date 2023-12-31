import styles from '../styles/PageLayout.module.css';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'
import Nav from './navbar.js'
import Sidebar from './sidebar.js'
import { useState } from 'react';

export default function ConditionLayout({ name, current, children }) {
const [sbactive, setActive] = useState(false);
const sbiconClick = () => {
  setActive(!sbactive);
};
  return <>
    <Nav></Nav>
    <div className={styles.wrapper}>
      <div className={styles.sidebar}><Sidebar current={current}></Sidebar></div>
      <button className={styles.mobilesbbtn} style={{marginLeft: sbactive ? "50%" : "0"}} onClick={(event) => {sbiconClick()}}><Image src="/images/sidebar-arrow.png" width={400} height={400} className={styles.mobilesbicon} style={{transform: sbactive ? "scaleX(-1)" : "scaleX(1)"}}alt="Arrow icon"></Image></button>
      <div className={styles.mobilesidebar} style={{display: sbactive ? "block" : "none"}}><Sidebar current={current}></Sidebar></div>
      <div className={styles.content} id="primaryContent">{children}</div>
      {/* Extra Content*/}
      <div className={styles.additionals}> </div>
    </div>
  </>
}