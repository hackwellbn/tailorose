import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['firebase/auth']
    }
  },
  meta: {
    charset: "utf-8",
    description: "Tailorose is a website offering a variety of fashion and design information also intended in reaching buyers.",
    author: "SoftNet",
    keywords: "Tailorose, tailoring website, tailoring, tailor",
    robots: "index, follow",
    "og:title": "Open Graph Title",
    "og:description": "Open Graph Description",
    "og:image": "URL to your Open Graph image",
    "og:url": "https://tailorose.com/",
    "og:type": "website",
    "twitter:title": "Twitter Card Title",
    "twitter:description": "Twitter Card Description",
    "twitter:image": "URL to your Twitter Card image",
    "twitter:card": "summary_large_image",
    "twitter:site": "@yourtwitterhandle",
    "twitter:creator": "@authoroftweet",
    "apple-mobile-web-app-title": "Tailorose",
    "application-name": "Tailorose",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "Tailorose",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "theme-color": "#ffffff",
    referrer: "strict-origin-when-cross-origin",
    "referrer-policy": "strict-origin-when-cross-origin",
    "content-security-policy": "default-src https:",
    "X-UA-Compatible": "IE=edge,chrome=1",
    generator: "SoftNet",
    viewport: "width=device-width, initial-scale=1.0",
    language: "English",
    "revisit-after": "7 days",
  },
});
