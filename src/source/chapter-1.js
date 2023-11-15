import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

function learn() {

  //console.log(global)

  console.log(os.type())
  console.log(os.version())
  console.log(os.homedir())
  console.log(os.hostname())
  console.log(os.platform())
  console.log(os.tmpdir())
  console.log(os.userInfo())

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  console.log(__filename)
  // /home/x/CODE/FULL/NODE/learn-node-1.0/src/source/chapter-1.js
  console.log(__dirname)
  // /home/x/CODE/FULL/NODE/learn-node-1.0/src/source

  // directory of the file
  console.log(path.dirname(__filename))
  // /home/x/CODE/FULL/NODE/learn-node-1.0/src/source
  console.log(path.basename(__filename)) // chapter-1.js
  console.log(path.extname(__filename)) // .js

  // an object with path infos
  console.log(path.parse(__filename))

  
}

export const chapter1 = {
  main: () => {
    learn();
  }
}