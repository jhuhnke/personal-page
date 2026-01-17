import React from "react";
import Layout from "@theme/Layout";
import styles from "./resume.module.css";

const skills = [
  { label: "Rust", tone: "honey" },
  { label: "TypeScript", tone: "teal" },
  { label: "Infra", tone: "navy" },
  { label: "Data\nPipelines", tone: "orange" },
  { label: "Smart\nContracts", tone: "tealSoft" },
  { label: "Web3\nSystems", tone: "honeySoft" },
] as const;

export default function Resume() {
  return (
    <Layout title="Resume" description="Resume">
      <main className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.title}>Resume</h1>
          <p className={styles.subtitle}>
            Download the PDF or view the highlights below.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
            <a className={styles.secondary} href="mailto:you@email.com">
              Contact
            </a>
          </div>
        </header>

        <section className={styles.section}>
          <h2>Experience</h2>
          <ul className={styles.list}>
            <li>
              <b>GlobalStake</b> — Head of Software Development · August 2023 -
              Present
            </li>
            <li>
              <b>Flipside Crypto</b> — Data Analytics Engineer · November 2021 -
              June 2023
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Skills</h2>
            <p className={styles.sectionHint}>
              A few things I reach for often.
            </p>
          </div>

          <div className={styles.skillGrid}>
            {skills.map((s) => (
              <div
                key={s.label}
                className={`${styles.skillCircle} ${styles[`tone_${s.tone}`]}`}
                aria-label={s.label}
              >
                <span className={styles.skillText}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
