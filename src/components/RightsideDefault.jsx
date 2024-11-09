import React from 'react'
import styles from "../styles/rightDefault.module.css"
import { MdLock } from 'react-icons/md'
import MainImage from "../assets/main_page.png";
const RightsideDefault = () => {
  return (
    <div className={styles.rightSideDefault}>
          <div className={styles.imageSec}>
            <img src={MainImage} alt="main Image" />
            <h2>Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className={styles.encryption}>
            <MdLock />
            end-to-end encrypted
          </div>
        </div>
  )
}

export default RightsideDefault