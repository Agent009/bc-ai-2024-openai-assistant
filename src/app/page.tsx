"use client";

import React from "react";
import styles from "@app/page.module.css";
import { constants } from "@lib/index";

const Home = () => {
  const categories = {
    "Basic chat": constants.routes.examples.basicChat,
    "Function calling": constants.routes.examples.functionCalling,
    "File search": constants.routes.examples.fileSearch,
    All: constants.routes.examples.all,
  };
  const examplesUrl = (url: string) => {
    return `${constants.routes.examples.base}${url}`;
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Explore sample apps built with Assistants API</div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={examplesUrl(url)}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
