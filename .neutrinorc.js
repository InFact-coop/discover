module.exports = {
  use: [
    [
      "@neutrinojs/react",
      {
        html: {
          title: "discover",
          links: [
            {
              href: "manifest.json",
              rel: "manifest",
            },
          ],
          meta: [
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
            },
            {
              name: "apple-mobile-web-app-capable",
              content: "yes",
            },
            {
              name: "apple-mobile-web-app-title",
              content: "Discover",
            },
          ],
        },
        babel: { plugins: ["babel-plugin-styled-components"] },
        devServer: {
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
            short_name: "Discover",
            name: "Discover",
            start_url: "/index.html",
            display: "standalone",
            orientation: "portrait",
            icons: [
              {
                src: "/bot.svg",
                sizes: "192x192",
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

    neutrino =>
      neutrino.config.when(process.env.NODE_ENV === "production", config => {
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
  ],
}
