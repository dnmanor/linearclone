import React from "react";
import styles from "../styles/interface.module.css";

const Roadmap = () => {
  return (
    <div className={styles.interfaceContainer}>
      <div className={styles.interfaceWrapper}>
        <div className={styles.interfaceContent}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <h2 className={styles.heading}>Set direction with Roadmap</h2>
              <div className={styles.descriptionContent}>
                <p className={styles.descriptionWriteup}>
                  <b className={styles.bold}>Focus on the big picture.</b>
                  {
                    "  Set milestones to tie projects to larger company goals and motivate your team. View all company projects in one streamlined view and easily identify what needs your attention."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cyclesScreenshotWrapper}>
            <div className={styles.screenshotcontainer}>
              <div className={styles.gradientyrp}></div>
              <img
                src="/roadmap.png"
                alt="roadmap"
                srcset=""
                className={styles.cyclesScreenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
