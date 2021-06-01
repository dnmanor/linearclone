import React from "react";
import styles from "../styles/interface.module.css";
import Image from "next/image";

const Interface = () => {
  return (
    <div className={styles.interfaceContainer}>
      <div className={styles.interfaceWrapper}>
        <div className={styles.interfaceContent}>
          <div className={styles.descriptionContainer}>
            <div className={styles.description}>
              <h2 className={styles.heading}>Interface, streamlined.</h2>
              <div className={styles.descriptionContent}>
                <p className={styles.descriptionWriteup}>
                  <b className={styles.bold}>Robust.</b>
                  {
                    " Fast to navigate. Create issues in seconds. Add priorities, labels and estimates."
                  }
                </p>
                <p className={styles.descriptionWriteup}>
                  <b className={styles.bold}> List and board.</b>
                  {"  See your issues in either a list or board view."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.screenshotWrapper}>
            <div className={styles.screenshotcontainer}>
              <div className={styles.gradientBg}></div>
              <img
                src="/interface2.png"
                alt="gradientbg2"
                srcset=""
                className={styles.screenshotTwo}
              />
              <img
                src="/interface1.png"
                alt="gradientbg1"
                srcset=""
                className={styles.screenshotOne}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//add this to test token setupß
export default Interface;
