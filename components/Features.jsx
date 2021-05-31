import React, { useRef } from "react";
import styles from "../styles/features.module.css";
import { features } from "../data/features";
import { Shortcut, Software, Team, Offline, Moon } from "../components/icons";

const Features = () => {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresWrapper}>
        <div className={styles.featuresHeading}>
          <h2 className={styles.header}>
            An experience you'd expect from a professional tool.
          </h2>
          <div className={styles.description}>
            Opinionated and designed for daily use.
          </div>
        </div>
        <div className={styles.featureTilesContainer}>
          {features.map((feature, index) => (
            <FeatureTile
              title={feature.name}
              description={feature.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureTile = ({ title, description }) => {
  const icon = useRef("");

  switch (title) {
    case "Multiple teams":
      icon.current = <Team />;
      break;

    case "Keyboard first design":
      icon.current = <Shortcut />;
      break;

    case "For software teams":
      icon.current = <Software />;
      break;

    case "Works offline":
      icon.current = <Offline />;
      break;

    case "Light and dark UI":
      icon.current = <Moon />;
      break;

    default:
      icon.current = "< 100ms";
      break;
  }
  return (
    <div className={styles.tileContainer}>
      <h4 className={styles.featureIcon}>{icon.current}</h4>
      <h5 className={styles.featureTitle}>{title}</h5>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default Features;
