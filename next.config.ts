import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Permite el cache-busting ?v=<mtime> en las fotos locales de public/images
    // (el valor cambia cada vez que se reemplaza el archivo, así que no se fija
    // un `search` exacto).
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
