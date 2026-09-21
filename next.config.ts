import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old site used .html / .php extensions and a few different paths.
      // These 301s preserve existing Google rankings and bookmarked links.
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/colleges.html", destination: "/colleges", permanent: true },
      { source: "/compare.html", destination: "/compare", permanent: true },
      { source: "/apply.html", destination: "/apply", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/disclaimer.html", destination: "/disclaimer", permanent: true },
      { source: "/perspectives.php", destination: "/perspectives", permanent: true },
      { source: "/portal/login.php", destination: "/portal", permanent: true },
      {
        source: "/courses/hypnotherapy-course-india",
        destination: "/certification/syllabus",
        permanent: true,
      },
      {
        source: "/courses/hypnotherapy-course-india/",
        destination: "/certification/syllabus",
        permanent: true,
      },
      {
        source: "/articles/famous-people-who-used-hypnosis.html",
        destination: "/articles/famous-people-who-used-hypnosis",
        permanent: true,
      },
      {
        source: "/articles/does-hypnotherapy-work.html",
        destination: "/articles/does-hypnotherapy-work",
        permanent: true,
      },
      // Trailing-slash old paths that already match the new route name.
      { source: "/dr-maruti-sharma/", destination: "/dr-maruti-sharma", permanent: true },
      { source: "/certification/syllabus/", destination: "/certification/syllabus", permanent: true },
      {
        source: "/india/hypnotherapy-delhi-ncr/",
        destination: "/india/hypnotherapy-delhi-ncr",
        permanent: true,
      },
      {
        source: "/gcc/hypnotherapy-dubai-sharjah/",
        destination: "/gcc/hypnotherapy-dubai-sharjah",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
