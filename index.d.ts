import type { inspect } from 'node:util'

declare module "tiny-chalk" {
  export const chalk: Record<keyof typeof inspect.colors | 'grey' | 'bgGrey', (text: string) => string>
  export = chalk
}

export function reset (text: string): string
export function bold (text: string): string
export function dim (text: string): string
export function italic (text: string): string
export function underline (text: string): string
export function blink (text: string): string
export function inverse (text: string): string
export function hidden (text: string): string
export function strikethrough (text: string): string
export function doubleunderline (text: string): string
export function framed (text: string): string
export function overlined (text: string): string

// front color
export function black (text: string): string
export function red (text: string): string
export function green (text: string): string
export function yellow (text: string): string
export function blue (text: string): string
export function magenta (text: string): string
export function cyan (text: string): string
export function white (text: string): string
export function gray (text: string): string
export function grey (text: string): string
export function redBright (text: string): string
export function greenBright (text: string): string
export function yellowBright (text: string): string
export function blueBright (text: string): string
export function magentaBright (text: string): string
export function cyanBright (text: string): string
export function whiteBright (text: string): string

// background color
export function bgBlack (text: string): string
export function bgRed (text: string): string
export function bgGreen (text: string): string
export function bgYellow (text: string): string
export function bgBlue (text: string): string
export function bgMagenta (text: string): string
export function bgCyan (text: string): string
export function bgWhite (text: string): string
export function bgGray (text: string): string
export function bgGrey (text: string): string
export function bgRedBright (text: string): string
export function bgGreenBright (text: string): string
export function bgYellowBright (text: string): string
export function bgBlueBright (text: string): string
export function bgMagentaBright (text: string): string
export function bgCyanBright (text: string): string
export function bgWhiteBright (text: string): string
