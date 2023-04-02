import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`${styles.hamburger} ${
          isMenuOpen ? styles["is-active"] : ""
        }`}
        onClick={toggleMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div>
          <h2>Dashboard</h2>
        </div>

        <img
          src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          alt="avatar"
          width="50%"
          className={styles.avatar}
        />

        <p>Hello Admin!</p>

        <ul>
          <li>
            <Link to="/carts"> Carts </Link>
          </li>
          <li>Users</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
