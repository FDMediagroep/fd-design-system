import React from 'react';
import {
    BulletPoint,
    getCssClassNames,
} from '../../src/components/bullet-point/BulletPoint';
import { render } from '@testing-library/react';

describe('BulletPoint', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <BulletPoint bullets={['one', 'two', 'three']} />
        );

        expect(getByText('one')).toBeTruthy();
        expect(getByText('two')).toBeTruthy();
        expect(getByText('three')).toBeTruthy();
    });

    test('should align correctly', () => {
        const { container } = render(
            <BulletPoint alignment="block" bullets={['one', 'two', 'three']} />
        );
        const { container: container2 } = render(
            <BulletPoint alignment="right" bullets={['one', 'two', 'three']} />
        );

        expect(container).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
    });

    test('should render variants correctly', () => {
        const { container } = render(
            <BulletPoint
                variant="variant-1"
                bullets={['one', 'two', 'three']}
            />
        );

        expect(container).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <BulletPoint
                variant="variant-1"
                bullets={['one', 'two', 'three']}
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
