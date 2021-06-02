import React from "react";
import styles from "../styles/integrations.module.css";
import { Github, Gitlab, Sentry, Figma, Slack } from "../components/icons";

const Integrations = () => {
  return (
    <div className={styles.integrationsWrapper}>
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Integrated with your tools</h2>
        <div className={styles.description}>
          Linear keeps everyone aligned and working more efficiently. Engineers,
          designers, and peers – all collaborating in one tool.
        </div>
      </div>
      <div className={styles.automatedTracking}>
        <div className={styles.detailsContainer}>
          <div className={styles.iconsContainer}>
            <Github />
            <div className={styles.hb}></div>
            <Gitlab />
            <div className={styles.hb}></div>
            <Sentry />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.heading}></h2>
            <div className={styles.descriptionAutomate}></div>
          </div>
        </div>
        <div className={styles.screenshotContainer}>
          <img
            src="/workflow.png"
            alt="workflow"
            className={styles.screenshot}
          />
        </div>
      </div>
      <div className={styles.automatedTracking}>
        <div className={styles.detailsContainer}>
          <div className={styles.iconsContainer}>
            <Figma />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.heading}></h2>
            <div className={styles.descriptionAutomate}></div>
          </div>
        </div>
        <div className={styles.screenshotContainer}>
          <img
            src="/figma.png"
            alt="figma"
            className={styles.screenshot}
          />
        </div>
      </div>
      <div className={styles.automatedTracking}>
        <div className={styles.detailsContainer}>
          <div className={styles.iconsContainer}>
            <Slack />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.heading}></h2>
            <div className={styles.descriptionAutomate}></div>
          </div>
        </div>
        <div className={styles.screenshotContainer}>
          <img
            src="/slack2.png"
            alt="slack"
            className={styles.screenshot}
          />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
