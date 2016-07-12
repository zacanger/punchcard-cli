#!/usr/bin/env node

const
  punch = require('punchcard')
, arg   = process.argv[2]

const help = () =>
  console.log(`please supply an argument to convert
usage:
    punchcard-cli yo
    punchcard foo
    punch 'hi there'`)

if (!arg || arg === '--help' || arg === '-h') {
  return help()
}

console.log(punch.txt2punch(arg))
