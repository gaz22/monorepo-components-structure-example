export const ComponentEntryTemplate = (componentName: string) => {
    return `export { default as ${componentName} } from "./${componentName}";`;
}