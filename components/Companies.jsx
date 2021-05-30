import React from "react";
import styles from "../styles/companies.module.css";
import {
  Craft,
  Quill,
  Dribbble,
  Expo,
  Loom,
  Mercury,
  Raycast,
  Readme,
  Render,
  Retool,
} from "../components/icons";

const Companies = () => {
  return (
    <div className={styles.companiesSectionContainer}>
      <p className={styles.companiesSlogan}>
        Powering the next generation of companies
      </p>
      <div className={styles.companiesContainer}>
        <span className={styles.company}>
          <Loom />
        </span>
        <span className={styles.company}>
          <Retool />
        </span>
        <span className={styles.company}>
        <Retool />
        </span>
        <span className={styles.company}>
          <Expo />
        </span>
        <span className={styles.company}>
          <Render />
        </span>
        <span className={styles.company}>
        <Retool />
        </span>
        <span className={styles.company}>
          <Dribbble />
        </span>
        <span className={styles.company}>
          <Dribbble />
        </span>
        <span className={styles.company}>
          <Craft />
        </span>
        <span className={styles.company}>
          <Raycast />
        </span>
        <span className={styles.company}>
          <Quill />
        </span>
      </div>
    </div>
  );
};

export default Companies;
