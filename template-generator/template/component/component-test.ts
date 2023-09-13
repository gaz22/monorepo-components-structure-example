

export const ComponentTestTemplate = (componentName: string) => {
    return `
import * as React from 'react';
import { ${componentName} } from './${componentName}';
import { render } from '@testing-library/react';

describe('${componentName}', () => {
  it('renders a basic ${componentName}', () => {
    const renderedComponent = render(<${componentName} />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
`
}
