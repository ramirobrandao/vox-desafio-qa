const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      return config;
    },
    //acesso ao site/ambiente
    baseUrl: 'https://www.saucedemo.com/v1',
    reporter: 'mochawesome',
    screenshotOnRunFailure: true,  // Gera print quando um teste falhar
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      "reportFilename": "report",
      "timestamp": "mmddyyyy_HHMMss",
      "inlineAssets": true,
      "autoOpen": true,
      "reportPageTitle": "Relatório de execução de testes no site SAUCEDEMO",
      "embeddedScreenshots": true  // Integrar screenshots no relatório
    }

  },
});
