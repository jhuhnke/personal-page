import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Jessica Huhnke',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // Update these if/when you deploy with GitHub Pages
  organizationName: 'jhuhnke',
  projectName: 'personal-page',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/jhuhnke',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Jessica Huhnke",
      items: [
        { to: "/blog", label: "Blog", position: "right" },
        { to: "/resume", label: "Resume", position: "right" },
        {
          href: "https://github.com/jhuhnke",
          label: "GitHub",
          position: "right",
        },
      ],
    },   
    footer: {
      style: "light",
      links: [
        {
          title: "Elsewhere",
          items: [
            { label: "X", href: "https://x.com/web3_analyst" },
            { label: "LinkedIn", href: "https://linkedin.com/in/web3-analyst" },
            { label: "GitHub", href: "https://github.com/jhuhnke" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Jessica Huhnke`,
    },       
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
