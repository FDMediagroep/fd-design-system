import React from 'react';
import {
    HorizontalToolbar,
    getCssClassNames,
    EventType,
    Props,
} from '../../../src/components/toolbar/HorizontalToolbar';
import { render, fireEvent } from '@testing-library/react';

describe('Horizontal toolbar', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <HorizontalToolbar
                id="12345"
                bookmarked={true}
                onClick={() => {}}
            />
        );

        expect(getByText('Deel via WhatsApp')).toBeTruthy();
        expect(getByText('Deel via Twitter')).toBeTruthy();
        expect(getByText('Deel via LinkedIn')).toBeTruthy();
        expect(getByText('Deel via Facebook')).toBeTruthy();
        expect(getByText('Deel via E-mail')).toBeTruthy();
        expect(getByText('Bewaren')).toBeTruthy();
    });

    test('should handle clicks correctly', () => {
        const spy = jest.fn();
        const { container } = render(
            <HorizontalToolbar id="12345" onClick={spy} />
        );

        expect(spy).toHaveBeenCalledTimes(0);
        fireEvent.click(container.querySelector('button[title="Bewaren"]')!);
        expect(spy).toHaveBeenCalledTimes(1);
        fireEvent.click(
            container.querySelector('button[title="Deel via E-mail"]')!
        );
        expect(spy).toHaveBeenCalledTimes(2);
    });

    test('should return props in click event', () => {
        let spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.WHATSAPP);
            expect(props.whatsappUrl).toBe('https://whatsapp');
            expect(props.bookmarked).toBeTruthy();
        };
        let renderResult = render(
            <HorizontalToolbar
                id="12345"
                bookmarked={true}
                onClick={spy}
                whatsappUrl="https://whatsapp"
            />
        );
        fireEvent.click(
            renderResult.container.querySelector(
                'button[title="Deel via WhatsApp"]'
            )!
        );

        spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.TWITTER);
            expect(props.twitterUrl).toBe('https://twitter');
            expect(props.bookmarked).toBeFalsy();
        };
        renderResult = render(
            <HorizontalToolbar
                id="12345"
                onClick={spy}
                twitterUrl="https://twitter"
            />
        );
        fireEvent.click(
            renderResult.container.querySelector(
                'button[title="Deel via Twitter"]'
            )!
        );

        spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.LINKED_IN);
            expect(props.linkedInUrl).toBe('https://linkedin');
        };
        renderResult = render(
            <HorizontalToolbar
                id="12345"
                onClick={spy}
                linkedInUrl="https://linkedin"
            />
        );
        fireEvent.click(
            renderResult.container.querySelector(
                'button[title="Deel via LinkedIn"]'
            )!
        );

        spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.FACEBOOK);
            expect(props.facebookUrl).toBe('https://facebook');
        };
        renderResult = render(
            <HorizontalToolbar
                id="12345"
                onClick={spy}
                facebookUrl="https://facebook"
            />
        );
        fireEvent.click(
            renderResult.container.querySelector(
                'button[title="Deel via Facebook"]'
            )!
        );

        spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.EMAIL);
            expect(props.emailUrl).toBe('https://email');
        };
        renderResult = render(
            <HorizontalToolbar
                id="12345"
                onClick={spy}
                emailUrl="https://email"
            />
        );
        fireEvent.click(
            renderResult.container.querySelector(
                'button[title="Deel via E-mail"]'
            )!
        );

        spy = (clickEvent: EventType, props: Props) => {
            expect(clickEvent).toBe(EventType.BOOKMARK);
        };
        renderResult = render(<HorizontalToolbar id="12345" onClick={spy} />);
        fireEvent.click(
            renderResult.container.querySelector('button[title="Bewaren"]')!
        );
    });

    test('should have correct class name', () => {
        const { container } = render(
            <HorizontalToolbar id="12345" onClick={() => {}} />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
