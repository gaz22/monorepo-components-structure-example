export const PackageTemplate = (componentName: string) => {
    return `
    {
        "name": "@example/${componentName}",
        "version": "1.0.0",
        "description": "A template for ${componentName}",
        "scripts": {
          "rollup": "rollup -c",
          "test": "jest"
        },
        "author": "gazz",
        "license": "",
        "devDependencies": {
          "@babel/preset-env": "^7.22.10",
          "@babel/preset-flow": "^7.22.5",
          "@babel/preset-react": "^7.22.5",
          "@babel/preset-typescript": "^7.22.11",
          "@rollup/plugin-commonjs": "^25.0.4",
          "@rollup/plugin-node-resolve": "^15.2.1",
          "@rollup/plugin-typescript": "^11.1.3",
          "@testing-library/react": "^14.0.0",
          "@types/jest": "^29.5.4",
          "@types/react": "^18.2.21",
          "autoprefixer": "^10.4.15",
          "bootstrap": "^5.3.1",
          "jest": "^29.6.4",
          "jest-environment-jsdom": "^29.6.4",
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "rollup": "^3.28.1",
          "rollup-plugin-dts": "^6.0.0",
          "rollup-plugin-postcss": "^4.0.2",
          "typescript": "^5.2.2"
        },
        "main": "dist/cjs/index.js",
        "module": "dist/esm/index.js",
        "types": "dist/index.d.ts",
        "files": [
          "dist"
        ],
        "peerDependencies": {
          "bootstrap": "^5.3.1"
        }
      }
      `;
}