export const ComponentStoriesTemplate = (componentName: string) => {
    return `import * as React from 'react';
    import { ${componentName} } from '../index';
    import "bootstrap/dist/css/bootstrap.min.css"; 
    
    export const ${componentName}Basic = () => {
      return <${componentName} />;
    };
    
    export default {
      title: 'Components core/${componentName}',
      component: ${componentName},
    };    
`};