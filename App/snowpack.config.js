/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      src: '/',
    },
    plugins: [
      '@snowpack/plugin-typescript'
    ],
    devOptions: {
      port: 5000,
    },
    buildOptions: {
      htmlFragments: true,
      out: 'dist',
    },
};
