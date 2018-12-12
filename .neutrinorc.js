module.exports = {
  use: [
    [
      "@neutrinojs/react",
      {
        babel: { plugins: ["babel-plugin-styled-components"] },
        devServer: {
          host: "0.0.0.0",
          allowedHosts: [".local"],
          proxy: {
            "/api/*": {
              target: "http://localhost:4000",
              changeOrigin: true,
            },
          },
        },
        manifest: {
          seed: {
            lang: "en",
            short_name: "DISCOVERbot",
            name: "DISCOVERbot",
            start_url: "/index.html",
            display: "standalone",
            orientation: "portrait",
            icons: [
              {
                src: "/android-icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
              },
              {
                src: "/android-icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
              },
            ],
          },
        },
      },
    ],
    [
      "@neutrinojs/style-loader",
      {
        loaders: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import"), // allows you to use @import
                require("postcss-custom-media"), // can set media queries as variables
                require("postcss-custom-properties"), // allows you to use css variables e.g. var(--my-variable)
                require("autoprefixer"), // adds vendor prefixes like -webkit or -moz to your css for better support
              ],
            },
          },
        ],
      },
    ],
    [
      "@neutrinojs/copy",
      {
        patterns: ["src/assets/phone-icons"],
      },
    ],
    neutrino =>
      neutrino.config.when(process.env.NODE_ENV === "production", config => {
        config
          .plugin("appcache-webpack-plugin")
          .use(require("appcache-webpack-plugin"), [
            {
              cache: [],
              network: ["*"],
              fallback: [],
              settings: ["prefer-online"],
              exclude: [/.*\.DS_Store$/],
              output: "discoverbot.appcache",
            },
          ])

        config
          .plugin("workbox")
          .use(require("workbox-webpack-plugin").GenerateSW, [
            {
              swDest: "sw.js",
              clientsClaim: true,
              skipWaiting: true,
            },
          ])
      }),
    [
      "@neutrinojs/html-template",
      {
        title: "DISCOVERbot",
        links: [
          {
            href: "/manifest.json",
            rel: "manifest",
          },
          {
            href: "/iphone-icon.png",
            rel: "apple-touch-icon",
            sizes: "180x180",
          },
        ],
        meta: [
          {
            name: "viewport",
            content:
              "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          },
          {
            name: "apple-mobile-web-app-title",
            content: "DISCOVERbot",
          },
        ],
        mobile: false,
        googleAnalytics: {
          trackingId: "UA-130717881-1",
        },
      },
    ],
  ],
}
