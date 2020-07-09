import React from 'react';
import {
    ArticleMeta,
    getCssClassNames,
} from '../../src/components/article-meta/ArticleMeta';
import { render } from '@testing-library/react';

describe('ArticleMeta', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <ArticleMeta
                authors={[
                    { fullName: 'Willem L.' },
                    { fullName: 'Pietje P.' },
                    { fullName: 'Jan D.' },
                ]}
                date="8 mei 2020"
            />
        );

        expect(getByText('Willem L.')).toBeTruthy();
        expect(getByText('Pietje P.')).toBeTruthy();
        expect(getByText('Jan D.')).toBeTruthy();
        expect(getByText('8 mei 2020')).toBeTruthy();
    });

    test('should render a link to the author page', () => {
        const { container } = render(
            <ArticleMeta
                authors={[
                    { fullName: 'Willem L.', directory: '/willem-liu' },
                    { fullName: 'Pietje P.' },
                    { fullName: 'Jan D.' },
                ]}
            />
        );

        expect(container.querySelector('a')).toBeTruthy();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <ArticleMeta
                authors={[
                    { fullName: 'Willem L.' },
                    { fullName: 'Pietje P.' },
                    { fullName: 'Jan D.' },
                ]}
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
