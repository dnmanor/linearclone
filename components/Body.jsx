import React from "react";
import styles from "../styles/body.module.css";
import Image from "next/image";

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
      <span className={styles.titleWrapper}>
        <h1 className={styles.heroTitle}>
          The issue tracking <br /> tool you'll enjoy using
        </h1>
        <p className={styles.heroDescription}>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. It's built for high-performance teams.
        </p>
        <button className={styles.signUpBtn}>Sign up for free -&gt;</button>
      </span>
      <span className={styles.screenshotContainer}>
        <span className={styles.screenshotBg}></span>
        <span className={styles.bgOutline}>
          <Image src="/screenshotoutline.svg" width={3120} height={761} />
        </span>
        <img
          src="/screenshot.jpg"
          alt="screenshot"
          className={styles.screenshot}
        />
      </span>
    </div>
  );
};

export default Body;
