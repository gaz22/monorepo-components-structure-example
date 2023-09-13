import { 
    BabelRCTemplate, 
    JestConfigTemplate, 
    PackageTemplate, 
    RollUpConfigTemplate, 
    TSconfigTemplate 
  } from '../template/config';

import { 
ComponentTemplate, 
ComponentEntryTemplate, 
ComponentTestTemplate,
ComponentStoriesTemplate 
} from '../template/component/index'

import fs from 'fs';

export const generateConfig = (file: string, configDir: string, componentName: string) => {
    switch (file) {
      case 'babel-rc-template.ts':
        const babelRCJson = BabelRCTemplate();
        fs.writeFileSync(`${configDir}/.babelrc.json`, babelRCJson);
        break;
  
      case 'jest-config-template.ts':
        const jestConfigTemplate = JestConfigTemplate(componentName);
        fs.writeFileSync(`${configDir}/jest.config.js`, jestConfigTemplate);
        break;
  
      case 'package-template.ts': 
        const packageTemplate = PackageTemplate(componentName);
        fs.writeFileSync(`${configDir}/package.json`, packageTemplate);
        break;
  
      case 'rollup-config-template.ts':
        const rollupConfigTemplate = RollUpConfigTemplate();
        fs.writeFileSync(`${configDir}/rollup.config.mjs`, rollupConfigTemplate);
        break;
  
      case 'tsconfig-template.ts': 
        const tsConfigTemplate = TSconfigTemplate();
        fs.writeFileSync(`${configDir}/tsconfig.json`, tsConfigTemplate);
        break;
  
      default:
        console.log(`Ignoring file: ${file}`);
        break;
    }
}

export const generateTemplate = (file: string, componentDir: string, componentName: string) => {
    switch (file) {
      case 'component-entry-template.ts':
        const componentEntryJS = ComponentEntryTemplate(componentName);
        fs.writeFileSync(`${componentDir}/index.ts`, componentEntryJS);
        break;
  
      case 'component-stories-template.ts':
        const componentStoriesJS = ComponentStoriesTemplate(componentName);
        fs.writeFileSync(`${componentDir}/stories/${componentName}.stories.tsx`, componentStoriesJS);
        break;
  
      case 'component-template.ts':
        const componentJS = ComponentTemplate(componentName);
        fs.writeFileSync(`${componentDir}/${componentName}.tsx`, componentJS);          
        break;
      
      case 'component-test.ts':
        const componentTestJS = ComponentTestTemplate(componentName);
        fs.writeFileSync(`${componentDir}/${componentName}.test.tsx`, componentTestJS);
        break;
  
      default:
        console.log(`Ignoring file: ${file}`);
        break;
    }   
  }