const fs = require('fs')

module.exports = {
  presets: [
    'next/babel'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: [ './' ],
        alias: fs.readdirSync(`${__dirname}/src/`).reduce((aliases, file) => {
          aliases[file] = `./src/${file}`
          return aliases
        }, {})
      }
    ]
  ]
}
