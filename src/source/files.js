import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

function leason1() {

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, 'files', 'just.txt')
  
  // file system

  // write file (async)
  //fs.writeFile('./src/')
  
  // read file (async)

  // path from ./root directory
  fs.readFile(
    filePath, 
    {encoding: 'utf8'},
    (err, data) => {
    if (err) throw err
    console.log(data)
  })
  /* 
  by default returns a buffer
  <Buffer 74 68 69 73 20 69 73 20 61 20 66 69 6c 65 20 62 79 20 6d 6f 72 74 65 7a 61 20 72 6f 73 74 61 6d 69 2e>
  */

  // listen for an exception (event)
  process.on('uncaughtException', err => {
    console.error(`there was an uncaught error: ${err}`)
    // exiting the process (program)
    process.exit(1)
  })
  
}

export const tutFiles = {
  main: () => {
    leason1();
  }
}