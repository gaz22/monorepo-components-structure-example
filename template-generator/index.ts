import fs from 'fs';
import path from 'path';
import readline from 'readline';

import { generateConfig, generateTemplate  } from './utils';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createComponentDirs = (folderPath: string[]) => {
  return folderPath.map((e)=>{
    fs.mkdirSync(e, { recursive: true });
  })
}

const CONFIG_DIR = './template/config';
const TEMPLATE_DIR = './template/component';

const generateFiles = (folderPath: string, componentName: string) => {
  const componentDir = `../components/${componentName}/src`;
  const configDir = `../components/${componentName}/`;

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      // Check if it's a file or a directory (you can use fs.statSync)
      const isFile = fs.statSync(filePath).isFile();

      if (isFile) {
        if(folderPath === CONFIG_DIR) {
          generateConfig(file, configDir, componentName)
        } else if(folderPath === TEMPLATE_DIR) {
          generateTemplate(file, componentDir, componentName)
        }
      } else {
        console.log('Directory:', file);
      }
    })
  });
}



rl.question('Enter the component name: ', (componentName: string) => {
  const componentDir = `../components/${componentName}/src`;
  const componentStoriesDir = `../components/${componentName}/src/stories`;
  const configDir = `../components/${componentName}/`;

  // Create the component directory
  createComponentDirs([
    componentDir,
    componentStoriesDir,
    configDir 
  ]);

  // generate config & template files
  generateFiles(CONFIG_DIR, componentName);
  generateFiles(TEMPLATE_DIR, componentName);

  rl.close();
});
