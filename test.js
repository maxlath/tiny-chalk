#!/usr/bin/env node
import chalk, { red, blue, yellow, green, bgGrey, bgMagenta, grey, gray, underline, strikethrough, overlined, blink } from './index.js'

console.log(red('chalk'))
console.log(blue('chalk'))
console.log(yellow('chalk'))
console.log(green('chalk'))
console.log(gray('chalk'))
console.log(grey('chalk'))
console.log(bgGrey('chalk'))
console.log(underline('chalk'))
console.log(overlined('chalk'))
console.log(blink('chalk'))
console.log(strikethrough('chalk'))
console.log(bgMagenta(chalk.blue('chalk')))
console.log(bgMagenta(chalk.grey('chalk')))
console.log(bgMagenta(chalk.gray('chalk')))
