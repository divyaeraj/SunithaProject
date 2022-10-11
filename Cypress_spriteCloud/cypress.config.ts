import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      let orderId
      // implement node event listeners here
      on('task', { 
        setOrderId: (val) => {
          return (orderId=val);
        },
        getOrderId: () => {
          return orderId
        }
      })
    },
    "env": {
      baseUrl: 'https://petstore.swagger.io/v2/',     
    },
    reporter: 'mochawesome',
    "reporterOptions" : {
"charts" : true,
"overwrite": false,
"html": false,
"json": true,
"reportDir" : "cypress/report/mochawesome-report"
    },
  },

});
