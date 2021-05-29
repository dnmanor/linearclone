import React from 'react'
import styles from '../styles/body.module.css'

const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            <span className={styles.bannerContainer}>
            <div className={styles.releaseBanner}></div>
            <div className={styles.bannerContent}>
            <img
              src="/release-logo.png"
              alt="release"
              className={styles.releaseLogo}
            />
            <div className={styles.releaseNameWrapper}>
              <span className={styles.releaseName}>
                Linear Release 2020.12 + Series A
              </span>
            </div>
            <span className={styles.hBar}>|</span>
            <span className={styles.whatsNew}>See what’s new →</span>
          </div>
            </span>

        </div>
    )
}

export default Body
