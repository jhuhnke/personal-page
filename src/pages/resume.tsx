import React from "react";
import Layout from "@theme/Layout";
import styles from "./resume.module.css";

const skills = [
  "Rust",
  "TypeScript",
  "Infra",
  "Data pipelines",
  "Smart contracts",
  "DevEx / Tooling",
];

export default function Resume() {
  return (
    <Layout title="Resume" description="Resume">
      <main className={styles.page}>
        {/* Top / header */}
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>RESUME</h1>
            <div className={styles.rule} aria-hidden="true" />
          </div>

          <p className={styles.subtitle}>
            Download the PDF or skim the highlights below.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/resume.pdf" target="_blank" rel="noreferrer">
              Download PDF
            </a>
            <a className={styles.secondary} href="mailto:you@email.com">
              Contact
            </a>
          </div>
        </header>

        {/* Body */}
        <section className={styles.grid}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <section className={styles.section}>
              <h2 className={styles.h2}>Experience</h2>

              <div className={styles.item}>
                <div className={styles.itemTop}>
                  <span className={styles.itemRole}>Head of Software Development</span>
                  <span className={styles.itemMeta}>Aug 2023 – Present</span>
                </div>
                <div className={styles.itemCompany}>GlobalStake</div>
                <ul className={styles.bullets}>
                  <li>Building staking + infrastructure products across multiple chains.</li>
                  <li>Shipping reliability/tooling improvements and developer-facing APIs.</li>
                </ul>
              </div>

              <div className={styles.item}>
                <div className={styles.itemTop}>
                  <span className={styles.itemRole}>Data Analytics Engineer</span>
                  <span className={styles.itemMeta}>Nov 2021 – Jun 2023</span>
                </div>
                <div className={styles.itemCompany}>Flipside Crypto</div>
                <ul className={styles.bullets}>
                  <li>Built data pipelines + analytics workflows across crypto ecosystems.</li>
                  <li>Worked closely with product to deliver metrics and dashboards.</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>Focus</h2>
              <p className={styles.paragraph}>
                Privacy-first systems, scalable infrastructure, and calm, observable software that
                compounds over time.
              </p>
            </section>
          </div>

          {/* Right column */}
          <aside className={styles.rightCol}>
            <section className={styles.section}>
              <h2 className={styles.h2}>Skills</h2>
              <div className={styles.skillGrid}>
                {skills.map((s) => (
                  <div key={s} className={styles.skillCircle}>
                    {s}
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>Links</h2>
              <div className={styles.links}>
                <a className={styles.link} href="https://github.com/jhuhnke" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className={styles.link} href="/blog">
                  Blog
                </a>
              </div>
            </section>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
