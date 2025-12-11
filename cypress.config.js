const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    viewportWidth: 1920,
    viewportHeight: 1080,

    


    //remove file from downloads
    setupNodeEvents(on, config) {

      on('task', {
        deleteFile(filename) {
          const filePath = path.join('cypress/downloads', filename)

          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
          }

          return null
        }
      })

      return config
    },
  },

  env: {
      apiBaseUrl: 'https://automationexercise.com/api'
    }
})
