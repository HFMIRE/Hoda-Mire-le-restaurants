const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "http://localhost:3000",

    GOOGLE_USER:
      "1005999975598-25dvqb76alr1q8k7kn4kiuf400lh3h0s.apps.googleusercontent.com",
    GOOGLE_PW: "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",
    COOKIE_NAME:
      "de294cf5e4cf41e975f6ac9b232dabe406719e6ffb6feae756317fccd00d192e",
    SITE_NAME: "https://hoda-mire-le-restaurants.vercel.app/",
  },
});
