import { styleText, inspect } from 'node:util'

const chalk = Object.fromEntries(Object.keys(inspect.colors).map(styleName => {
  return [
    styleName,
    // See https://nodejs.org/api/util.html#utilstyletextformat-text-options
    styleText.bind(null, styleName)
  ]
}))

chalk.grey = chalk.gray
chalk.bgGrey = chalk.bgGray

export default chalk

export const reset = chalk.reset
export const bold = chalk.bold
export const dim = chalk.dim
export const italic = chalk.italic
export const underline = chalk.underline
export const blink = chalk.blink
export const inverse = chalk.inverse
export const hidden = chalk.hidden
export const strikethrough = chalk.strikethrough
export const doubleunderline = chalk.doubleunderline
export const framed = chalk.framed
export const overlined = chalk.overlined

// front color
export const black = chalk.black
export const red = chalk.red
export const green = chalk.green
export const yellow = chalk.yellow
export const blue = chalk.blue
export const magenta = chalk.magenta
export const cyan = chalk.cyan
export const white = chalk.white
export const gray = chalk.gray
export const grey = chalk.grey
export const redBright = chalk.redBright
export const greenBright = chalk.greenBright
export const yellowBright = chalk.yellowBright
export const blueBright = chalk.blueBright
export const magentaBright = chalk.magentaBright
export const cyanBright = chalk.cyanBright
export const whiteBright = chalk.whiteBright

// background color
export const bgBlack = chalk.bgBlack
export const bgRed = chalk.bgRed
export const bgGreen = chalk.bgGreen
export const bgYellow = chalk.bgYellow
export const bgBlue = chalk.bgBlue
export const bgMagenta = chalk.bgMagenta
export const bgCyan = chalk.bgCyan
export const bgWhite = chalk.bgWhite
export const bgGray = chalk.bgGray
export const bgGrey = chalk.bgGrey
export const bgRedBright = chalk.bgRedBright
export const bgGreenBright = chalk.bgGreenBright
export const bgYellowBright = chalk.bgYellowBright
export const bgBlueBright = chalk.bgBlueBright
export const bgMagentaBright = chalk.bgMagentaBright
export const bgCyanBright = chalk.bgCyanBright
export const bgWhiteBright = chalk.bgWhiteBright
