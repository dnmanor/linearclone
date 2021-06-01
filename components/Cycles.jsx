import React from "react";
import styles from "../styles/interface.module.css";

const Cycles = () => {
  return (
    <div className={styles.interfaceContainer}>
      <div className={styles.interfaceWrapper}>
        <div className={styles.interfaceContent}>
         
          <div className={styles.cyclesScreenshotWrapper}>
            <div className={styles.screenshotcontainer}>
              <div className={styles.gradientBgPink}></div>
              <img
                src="/cycles.jpg"
                alt="cycles"
                srcset=""
                className={styles.cyclesScreenshot}
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <h2 className={styles.heading}>Build team momentum with Cycles</h2>
              <div className={styles.descriptionContent}>
                <p className={styles.descriptionWriteup}>
                  <b className={styles.bold}>Velocity and estimates.</b>
                  {
                    " Track your team's workload and velocity."
                  }
                </p>
                <p className={styles.descriptionWriteup}>
                  <b className={styles.bold}> Automated.</b>
                  {"  Cycles run on an automated schedule, so you can focus on your work."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycles;
