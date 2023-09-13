export const JestConfigTemplate = (componentName: string) => {
    return `
    module.exports = {
        displayName: 'example/${componentName}',
        testEnvironment: 'jest-environment-jsdom',
        collectCoverage: true,
        testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
      };
      
    `;
}