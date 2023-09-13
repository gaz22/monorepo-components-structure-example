export const ComponentTemplate = (componentName: string) => {
    return`import React from 'react';

    export const ${componentName} = () => {
    return (
      <div className="${componentName.toLowerCase()}">
        {/* Your component content goes here */}
        ${componentName}
      </div>
    );
  }

  export default ${componentName};
`};