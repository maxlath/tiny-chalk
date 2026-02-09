# tiny-chalk

A super tiny version of [chalk](https://github.com/chalk/chalk), loading in ~1ms instead of ~10ms for chalk (YMMV)

This is convenient when you are in a controlled environment (that is that you don't need all the `supports-color` detection `chalk` provides)

[2026 update]: **YOU MIGHT NOT NEED SUCH A THIS LIBRARY**, since as of `v20.12.0`, NodeJS has a [`util.styleText` function](https://nodejs.org/api/util.html#utilstyletextformat-text-options). `tiny-chalk` is now just a convenience wrapper around `util.styleText`.

## Install

```bash
# To import from ES module in NodeJS
npm install tiny-chalk

# To import from ES module in other JS environment without access to node:util styleText function
npm install tiny-chalk@3

# To import from CommonJS
npm install tiny-chalk@v2
```

## Usage

```js
import { red, bold, bgBlack } from 'tiny-chalk'

console.log(red('Hello world!'))
console.log(bold(bgBlack(red('Hello world again!'))))
```

## Supported styles and colors

Everything that can be found in `util.inspect.colors`, plus aliases for `gray` and `bgGray` as `grey` and `bgGrey`:

```
// style
reset
bold
dim
italic
underline
blink
inverse
hidden
strikethrough
doubleunderline
framed
overlined

// front color
black
red
green
yellow
blue
magenta
cyan
white
gray
grey
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright

// background color
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
bgGray
bgGrey
bgRedBright
bgGreenBright
bgYellowBright
bgBlueBright
bgMagentaBright
bgCyanBright
bgWhiteBright
```
