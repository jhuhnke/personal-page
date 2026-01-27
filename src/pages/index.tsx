import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Home" description="Jessica Huhnke — personal site + blog">
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          {/* Big "HI!" block */}
          <div className={styles.hiRow}>
            <div className={styles.hiBlock} aria-hidden="true">
              <span className={styles.hiText}>HI</span>
              <span className={styles.hiBang}>!</span>
              <span className={styles.hiDot} />
            </div>

            <div className={styles.hiRule} aria-hidden="true" />
          </div>

          {/* Bottom intro + CTA */}
          <div className={styles.bottomRow}>
            <div className={styles.intro}>
              <p className={styles.introLead}>
                I’m <span className={styles.nameAccent}>Jessica</span>.
              </p>
              <p className={styles.introSub}>
                Web3 infrastructure engineer focused on privacy-first systems,
                reliability, and open-source tooling.
              </p>
            </div>

            <div className={styles.ctaWrap}>
              <a className={styles.cta} href="/resume">
                Check out my resume
              </a>
              <a className={styles.ctaSecondary} href="/blog">
                Or read the blog →
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
