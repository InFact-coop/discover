module.exports = {
  use: [
    [
      "@neutrinojs/react",
      {
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

        config
          .plugin("appcache-webpack-plugin")
          .use(require("appcache-webpack-plugin"), [
            {
              cache: [
                "IBMPlexSans-Italic.893b6b36d44c1c76042d637536a659b8.ttf",
                "index.html",
                "runtime.a9edc78d5cd6127c9851.js",
                "welldone.537c80bdf6aae9d62ac5c535dfebd27f.svg",
                "robot_round.1e815d0245a2f9bb589cc5ff60fb52ed.png",
                "IBMPlexSans-SemiBold.e077582a9931abfd04139ccf57fb5eb8.ttf",
                "index.4290802916de42d2e761.js",
                "index.b61556d741a95fd018c33fd94f7937f3.css",
                "circle.1a9a6942f4927616ad825ad0d30e4065.png",
                "bot.e63ee71748ae22dcf1b2124fc399c1a6.svg",
                "IBMPlexSans-Regular.05ca9c06114e79436ea9b5c8d4a7869c.ttf",
                "IBMPlexSans-Medium.4781e7ef9a091fd376a5c4594d9515f6.ttf",
                "IBMPlexSans-Bold.4171e41154ba857f85c536f167d581ba.ttf",
                "IBMPlexMono-Regular.6c48837e3790973f33677a28e3accb41.ttf",
                "IBMPlexMono-Medium.5768c0973ec2d5490bd3e57c25b26719.ttf",
                "IBMPlexMono-Italic.52f1a0b3b4221bbcef827d57eed8b60d.ttf",
                "IBMPlexMono-Bold.6921067a6596496232b0170b0434a6d2.ttf",
              ],
              network: ["*"],
              fallback: [],
              settings: ["prefer-online"],
              exclude: [/.*\.DS_Store$/],
              output: "discoverbot.appcache",
            },
          ])
      }),
    [
      "@neutrinojs/html-template",
      {
        title: "DISCOVERbot",
        links: [{ href: "/manifest.json", rel: "manifest" }],
      },
    ],
  ],
}
