import React from 'react';
import {
    HybridCard1,
    getCssClassNames,
} from '../../../src/components/card/HybridCard1';
import { render } from '@testing-library/react';

describe('HybridCard1', () => {
    test('should render correctly', () => {
        const { container, getByText } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                imageUrlS="https://images.example.com/imageS.png"
                imageUrlM="https://images.example.com/imageM.png"
                imageUrlL="https://images.example.com/imageL.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(getByText('This is the title')).toBeTruthy();
        expect(getByText('Ondernemen')).toBeTruthy();
        expect(getByText('This is the intro')).toBeTruthy();
        expect(getByText('This is the caption')).toBeTruthy();
        expect(container.querySelector('[href]').getAttribute('href')).toBe(
            'https://example.com/1/This is the title'
        );
    });

    test('should render is-read correctly', () => {
        const { container } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                isRead={true}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should render variant-1 correctly', () => {
        const { container } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                variant="variant-1"
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('should render themes correctly', () => {
        const { container: container1 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme1"
            />
        );
        const { container: container2 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme2"
            />
        );
        const { container: container3 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme3"
            />
        );
        const { container: container4 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme4"
            />
        );
        const { container: container5 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme5"
            />
        );
        const { container: container6 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme6"
            />
        );
        const { container: container7 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme7"
            />
        );
        const { container: container8 } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
                theme="theme8"
            />
        );
        expect(container1).toMatchSnapshot();
        expect(container2).toMatchSnapshot();
        expect(container3).toMatchSnapshot();
        expect(container4).toMatchSnapshot();
        expect(container5).toMatchSnapshot();
        expect(container6).toMatchSnapshot();
        expect(container7).toMatchSnapshot();
        expect(container8).toMatchSnapshot();
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HybridCard1
                id="1"
                imageUrl="https://images.example.com/image.png"
                caption="This is the caption"
                intro="This is the intro"
                label="Ondernemen"
                title="This is the title"
                url="https://example.com/1/This is the title"
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
