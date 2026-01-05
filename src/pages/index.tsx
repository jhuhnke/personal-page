import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Home" description="Personal site + blog">
      <main>
        {/* HERO (light region) */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.kicker}>Hey, I’m Jessica…</p>

              <h1 className={styles.heroTitle}>
                I build infrastructure, privacy-first systems, and open-source tools.
              </h1>

              <p className={styles.heroBody}>
                This is a placeholder intro section. Use it for a short “what I do” + “what
                I’m writing about” blurb.
              </p>

              <div className={styles.heroCtas}>
                <a className={styles.primaryCta} href="/blog/welcome">
                  Start here
                </a>
                <a className={styles.secondaryCta} href="/blog">
                  Read the blog
                </a>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <img
                className={styles.heroImage}
                src="/img/hero-placeholder.jpg"
                alt="Placeholder portrait"
              />
            </div>
          </div>
        </section>

        {/* WAVE DIVIDER */}
        <div className={styles.waveWrap} aria-hidden="true">
          <svg
            className={styles.wave}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64
                C120,128 240,0 360,64
                C480,128 600,0 720,64
                C840,128 960,0 1080,64
                C1200,128 1320,0 1440,64
                L1440,120 L0,120 Z"
              className={styles.wavePath}
            />
          </svg>
        </div>

        {/* DARK REGION WRAPPER (band + feature + area behind footer) */}
        <div className={styles.homepageDarkRegion}>
          {/* BAND / DIVIDER */}
          <section className={styles.band}>
            <div className={styles.bandInner}>
              <p>
                I’ve spent the last few years shipping across crypto ecosystems — focusing
                on reliability, tooling, and systems that scale.
              </p>
            </div>
          </section>

          {/* BELIEFS / FEATURE SECTION */}
          <section className={styles.feature}>
            <div className={styles.featureInner}>
              <div className={styles.featureImageWrap}>
                <img
                  className={styles.featureImage}
                  src="/img/section-placeholder.jpg"
                  alt="Placeholder lifestyle shot"
                />
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureCardTitle}>Here’s what I believe…</div>
                <div className={styles.featureCardBody}>
                  <p>Simple systems beat complicated ones — especially when you’re early.</p>
                  <p>If it isn’t observable, it isn’t reliable.</p>
                  <p>Open source is a force multiplier: document, share, iterate.</p>
                  <p>The best work is calm, consistent, and compounding.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
