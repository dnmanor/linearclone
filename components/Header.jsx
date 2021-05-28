import React from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.menuContainer}>
          <a className={styles.logo}>
            <span className={styles.logoShape}>
              <Image src="/logoicon.svg" alt="icon" width={24} height={24} />
            </span>
            <Image src="/logotext.svg" alt="Logo" width={55} height={15} />
          </a>
          <div className={styles.menuWrapper}>
            <div className={styles.menuNav}>
              <div className={styles.navContent}>
                <a href="" className={styles.menuItem}>
                  Method
                </a>
                <a href="" className={styles.menuItem}>
                  Changelog
                </a>
                <a href="" className={styles.menuItem}>
                  About us
                </a>
                <a href="" className={styles.menuItem}>
                  Pricinghh
                </a>
                <a href="" className={styles.menuItem}>
                  We're hiring
                </a>
                <a href="" className={styles.menuItem}>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href="" className={styles.loginBtn}>
              Log In
            </a>
            <button className={styles.signUpBtn}>Sign Up</button>
            <span className={styles.burgerWrapper}>
              <Image
                src="/burgericon.svg"
                alt="menu"
                width={48}
                height={11}
                className={styles.burgerMenu}
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
