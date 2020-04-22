'use strict'

const fs = require('fs')
// es6: import fs from 'fs'

const file = process.argv[2]
const contents = fs.readFileSync(file, 'utf8')

const lines = contents.split('\n')
const count = lines.length - 1

console.log(count)
