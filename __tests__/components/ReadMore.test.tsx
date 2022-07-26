import React from 'react';
import {
    ReadMore,
    getCssClassNames,
} from '../../src/components/readmore/ReadMore';
import { render } from '@testing-library/react';

describe('ReadMore', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <ReadMore title="Lees ook" links={['link1', 'link2', 'link3']} />
        );

        expect(getByText('Lees ook')).toBeTruthy();
        expect(getByText('link1')).toBeTruthy();
        expect(getByText('link2')).toBeTruthy();
        expect(getByText('link3')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <ReadMore title="Lees ook" links={['link1', 'link2', 'link3']} />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
