"use strict";
var defineConfig = require("cypress").defineConfig;
module.exports = defineConfig({
    e2e: {
        setupNodeEvents: function (on, config) {
            // implement node event listeners here
        },
    },
});
