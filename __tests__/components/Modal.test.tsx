import React from 'react';
import { Modal, getCssClassNames } from '../../src/components/modal/Modal';
import { render, fireEvent } from '@testing-library/react';

describe('Modal', () => {
    test('should render correctly', () => {
        const { getByText } = render(
            <Modal opened={true}>
                <h1>Testing 123</h1>
            </Modal>
        );

        expect(getByText('Testing 123')).toBeTruthy();
    });

    test('should propagate close event correctly', () => {
        const spy = jest.fn();
        render(
            <Modal
                contentBackgroundClassName="test-modal"
                opened={true}
                onClose={spy}
            >
                <h1>Testing 123</h1>
            </Modal>
        );
        fireEvent.click(document.querySelector('.test-modal'));
        expect(spy).toBeCalledTimes(1);
        fireEvent.click(document.querySelector('.test-modal span'));
        expect(spy).toBeCalledTimes(2);
        // Should stopPropagation when clicking on the content.
        fireEvent.click(document.querySelector('.test-modal h1'));
        expect(spy).toBeCalledTimes(2);
    });

    test('should have correct class name', () => {
        const { container } = render(
            <Modal opened={true}>
                <h1>Testing 123</h1>
            </Modal>
        );

        expect(
            container.firstElementChild.classList.contains(
                getCssClassNames()[0]
            )
        ).toBeTruthy();
    });
});
