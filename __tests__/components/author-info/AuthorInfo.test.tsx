import React from 'react';
import {
    AuthorInfo,
    getCssClassNames,
} from '../../../src/components/author-info/AuthorInfo';
import { render, fireEvent } from '@testing-library/react';

describe('AuthorInfo', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <AuthorInfo
                description={
                    <p>
                        Nelleke Trappenburg schrijft bij het FD over pensioenen:
                        dekkingsgraden, beleggingskosten, nieuwe wetgeving etc.
                        Eerder werkte zij onder meer op de beursredactie.
                    </p>
                }
                imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
                title="Nelleke Trappenburg"
                followed={false}
                onEmailClick={() => {}}
                onFollowAuthorClick={() => {}}
                onLinkedInClick={() => {}}
                onTwitterClick={() => {}}
            />
        );

        expect(getByText('Nelleke Trappenburg')).toBeTruthy();
        expect(getByText('Volg deze auteur')).toBeTruthy();
        expect(
            getByText(
                'Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.'
            )
        ).toBeTruthy();
    });

    test('should handle click correctly', () => {
        const spy = jest.fn();

        const { getByText } = render(
            <AuthorInfo
                description={
                    <p>
                        Nelleke Trappenburg schrijft bij het FD over pensioenen:
                        dekkingsgraden, beleggingskosten, nieuwe wetgeving etc.
                        Eerder werkte zij onder meer op de beursredactie.
                    </p>
                }
                imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
                title="Nelleke Trappenburg"
                followed={false}
                onEmailClick={spy}
                onFollowAuthorClick={spy}
                onLinkedInClick={spy}
                onTwitterClick={spy}
            />
        );
        expect(spy).toBeCalledTimes(0);
        fireEvent.click(getByText('e-mail', { exact: false }));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(getByText('twitter', { exact: false }));
        expect(spy).toBeCalledTimes(2);
        fireEvent.click(getByText('LinkedIn', { exact: false }));
        expect(spy).toBeCalledTimes(3);
        fireEvent.click(getByText('Volg deze auteur'));
        expect(spy).toBeCalledTimes(4);
    });

    test('should have correct class name', () => {
        const { container } = render(
            <AuthorInfo
                description={
                    <p>
                        Nelleke Trappenburg schrijft bij het FD over pensioenen:
                        dekkingsgraden, beleggingskosten, nieuwe wetgeving etc.
                        Eerder werkte zij onder meer op de beursredactie.
                    </p>
                }
                imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
                title="Nelleke Trappenburg"
            />
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
