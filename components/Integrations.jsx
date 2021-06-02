import React from "react";
import styles from "../styles/integrations.module.css";
import {
  Github,
  Gitlab,
  Sentry,
  Figma,
  Slack,
  Zapier,
  API,
} from "../components/icons";

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
          <img src="/figma.png" alt="figma" className={styles.screenshot} />
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
          <img src="/slack2.png" alt="slack" className={styles.screenshot} />
        </div>
      </div>
      <div className={styles.smallerContainer}>
        <div className={styles.smallIntegration}>
          <Zapier />
          <div className={styles.smallDescription}>
            <h4 className={styles.smallTitle}>
              Connect with 1000+ tools using Zapier
            </h4>
            <p className={styles.p}>
              Create new issues based on triggers from Zapier applications.
            </p>
          </div>
        </div>

        <div className={styles.smallIntegration}>
          <API />
          <div className={styles.smallDescription}>
            <h4 className={styles.smallTitle}>
              Custom workflows using our API
            </h4>
            <p className={styles.p}>
              {
                "Query and mutate data using our GraphQL API to build custom workflows."
              }
            </p>
          </div>
        </div>
      </div>ß
    </div>
  );
};

export default Integrations;
