#!/usr/bin/env node

const
  punch = require('punchcard')
, arg   = process.argv[2]

if (!arg) {
  return console.log('please supply an argument to convert')
}

console.log(punch.txt2punch(arg))
