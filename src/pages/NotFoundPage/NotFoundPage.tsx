import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundPageContainer}>
      <h1>Oops! You seem to be lost.</h1>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFoundPage;
