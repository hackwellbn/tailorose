import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  meta: {
    charset: "utf-8",
    description: "Tailorose is a webiste offering a variety of fashion and deign information also intended in reaching buyers.",
    author: "SoftNet",
    keywords: "Tailorose, tailoring website,  tailoring, tailor",
    robots: "index, follow", // or 'noindex, nofollow' to prevent indexing
    "og:title": "Open Graph Title",
    "og:description": "Open Graph Description",
    "og:image": "URL to your Open Graph image",
    "og:url": "https://tailorose.com/",
    "og:type": "website", // or 'article', 'book', etc. depending on the content
    "twitter:title": "Twitter Card Title",
    "twitter:description": "Twitter Card Description",
    "twitter:image": "URL to your Twitter Card image",
    "twitter:card": "summary_large_image", // or 'summary' for smaller cards
    "twitter:site": "@yourtwitterhandle", // your Twitter username
    "twitter:creator": "@authoroftweet", // Twitter username of content creator
    "apple-mobile-web-app-title": "Tailorose", // for iOS web apps
    "application-name": "Tailorose", // for Windows pinned sites
    "msapplication-TileColor": "#ffffff", // for Windows pinned sites
    "msapplication-TileImage": "Tailorose", // for Windows pinned sites
    "apple-mobile-web-app-capable": "yes", // for iOS web apps
    "apple-mobile-web-app-status-bar-style": "black-translucent", // for iOS web apps
    "format-detection": "telephone=no", // disables automatic phone number detection
    "mobile-web-app-capable": "yes", // for Android web apps
    "theme-color": "#ffffff", // sets the browser theme color
    referrer: "strict-origin-when-cross-origin", // control referrer behavior
    "referrer-policy": "strict-origin-when-cross-origin", // control referrer behavior
    "content-security-policy": "default-src https:", // sets Content Security Policy
    "X-UA-Compatible": "IE=edge,chrome=1", // sets compatibility mode for IE
    generator: "SoftNet", // identifies the generator of the document
    viewport: "width=device-width, initial-scale=1.0", // sets the viewport
    language: "English", // sets the language of the page
    "revisit-after": "7 days", // sets the revisit after duration
    // Add more meta tags as needed
  },
});
