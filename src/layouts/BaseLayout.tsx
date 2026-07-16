import styles from "./BaseLayout.module.scss";
import { NavLink, Outlet } from "react-router";
import Logo from "@/assets/svg/logo.svg?react";
import ProfilePicture from "@/assets/image/image-avatar.jpg";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";

export function BaseLayout() {
  return (
    <div className={styles.baseLayout}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <NavLink to="/">
            <span className="visually-hidden">Back to home</span>
            <Logo className={styles.logo} aria-hidden="true" />
          </NavLink>
        </div>

        <div className={styles.themeContainer}>
          <ThemeSwitch />
        </div>

        <div className={styles.profilePicture}>
          <img width="40" height="40" src={ProfilePicture} alt="user name" />
        </div>
      </header>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
