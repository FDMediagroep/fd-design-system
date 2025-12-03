import React from 'react';
import {
    ArticleTags,
    getCssClassNames,
} from '../../../src/components/article-tags/ArticleTags';
import { render, fireEvent } from '@testing-library/react';

describe('AuthorInfo', () => {
    const tags = [
        {
            tag: 'Detailhandel',
            uuid: '1',
        },
        {
            selected: true,
            tag: 'Eten & Drinken',
            uuid: '2',
        },
        {
            alertSelected: true,
            selected: true,
            tag: 'Supermarkt',
            uuid: '3',
        },
    ];

    test('should render correctly', async () => {
        const spy = jest.fn();
        const { getByText, findAllByText, container } = render(
            <ArticleTags
                onDisableAlertClick={spy}
                onEnableAlertClick={spy}
                onFollowClick={spy}
                onUnfollowClick={spy}
                title="Volgen via mijn nieuws"
                titleLink="https://fd.nl/mijn-nieuws"
                tags={tags}
            />
        );

        expect(getByText('Volgen via mijn nieuws')).toBeTruthy();
        expect(getByText('Detailhandel')).toBeTruthy();
        expect(getByText('Eten & Drinken')).toBeTruthy();
        expect(getByText('Supermarkt')).toBeTruthy();
        expect(await findAllByText('Volg')).toBeTruthy();
        expect(
            container.querySelectorAll('[data-selected=true]').length
        ).toEqual(2);
    });

    test('should handle click correctly', () => {
        const spy = jest.fn();
        const { container } = render(
            <ArticleTags
                onDisableAlertClick={spy}
                onEnableAlertClick={spy}
                onFollowClick={spy}
                onUnfollowClick={spy}
                title="Volgen via mijn nieuws"
                titleLink="https://fd.nl/mijn-nieuws"
                tags={tags}
            />
        );

        const followButton = container.querySelectorAll(
            'button:not([data-selected])'
        )[0];

        expect(spy).toHaveBeenCalledTimes(0);
        fireEvent.click(followButton);
        expect(spy).toHaveBeenCalledTimes(1);

        const unfollowButton = container.querySelectorAll(
            'button[data-selected="true"]'
        )[0];
        fireEvent.click(unfollowButton);
        expect(spy).toHaveBeenCalledTimes(2);

        const setAlertButton = container.querySelectorAll(
            'span[data-tag="Eten & Drinken"]'
        )[0];
        fireEvent.click(setAlertButton);
        expect(spy).toHaveBeenCalledTimes(3);

        const removeAlertButton = container.querySelectorAll(
            'span[data-tag="Eten & Drinken"]'
        )[1];
        fireEvent.click(removeAlertButton);
        expect(spy).toHaveBeenCalledTimes(4);
    });

    test('should have correct class name', () => {
        const spy = jest.fn();
        const { container } = render(
            <ArticleTags
                onDisableAlertClick={spy}
                onEnableAlertClick={spy}
                onFollowClick={spy}
                onUnfollowClick={spy}
                title="Volgen via mijn nieuws"
                titleLink="https://fd.nl/mijn-nieuws"
                tags={tags}
            />
        );

        expect(
            container.firstElementChild?.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
