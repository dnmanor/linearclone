import React, { useRef, useState } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
//   const desktopView = useRef('')

//   React.useEffect(() => {
//     const mql = window.matchMedia("(min-width: 900px)");

//      desktopView.current = mql.matches;

//     if (desktopView.current) {
//       setIsHidden(true);
//     }
//   }, [desktopView]);

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
                  Pricing
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
            <span
              className={styles.burgerWrapper}
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
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
      {isHidden ? <span></span> : <MobileMenu />}
    </header>
  );
};

const MobileMenu = () => {
  return (
    // <div>
    <div className={styles.mbnavContent}>
      <a href="" className={styles.mbmenuItem}>
        Method
      </a>
      <a href="" className={styles.mbmenuItem}>
        Changelog
      </a>
      <a href="" className={styles.mbmenuItem}>
        About us
      </a>
      <a href="" className={styles.mbmenuItem}>
        Pricing
      </a>
      <a href="" className={styles.mbmenuItem}>
        We're hiring
      </a>
      <a href="" className={styles.mbmenuItem}>
        Twitter
      </a>
    </div>
    // </div>
  );
};

export default Header;
