import * as React from 'react';
import { Card } from './Card';
import { render } from '@testing-library/react';

describe('Card', () => {
  it('renders a basic Card', () => {
    const renderedComponent = render(
        <Card
            title="Card"
            content="Card Content"
            footer="Card Footer"
            cardImage="https://placehold.co/184x180"
        />
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
