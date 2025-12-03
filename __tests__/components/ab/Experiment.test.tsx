import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Experiment, Variant } from '../../../src/components/ab/ab';

describe('AB Experiment', () => {
    test('should render correctly', async () => {
        const { getByText } = render(
            <Experiment
                name="Test experiment"
                pickVariant={() => 0}
                debug={true}
            >
                <Variant name="1">
                    <h1>Headline 1</h1>
                </Variant>
                <Variant name="2">
                    <h1>Headline 2</h1>
                </Variant>
            </Experiment>
        );
        expect(getByText('Headline 1', { exact: false })).toBeTruthy();
        expect(getByText('A/B Test experiment', { exact: false })).toBeTruthy();
    });

    test('should handle click correctly', async () => {
        const spy = jest.fn();
        const { getByText } = render(
            <Experiment
                name="Test experiment"
                pickVariant={() => 0}
                debug={true}
                onClick={spy}
            >
                <Variant name="1">
                    <h1>Headline 1</h1>
                </Variant>
                <Variant name="2">
                    <h1>Headline 2</h1>
                </Variant>
            </Experiment>
        );

        expect(spy).toHaveBeenCalledTimes(0);
        fireEvent.click(getByText('Headline 1', { exact: false }));
        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('should handle debug correctly', async () => {
        const handleRunExperiment = (experimentName: string) => {
            expect(experimentName).toBe('Test experiment');
        };
        const { getByText, getByTitle } = render(
            <Experiment
                name="Test experiment"
                pickVariant={() => 0}
                debug={true}
                onRunExperiment={handleRunExperiment}
            >
                <Variant name="1">
                    <h1>Headline 1</h1>
                </Variant>
                <Variant name="2">
                    <h1>Headline 2</h1>
                </Variant>
            </Experiment>
        );

        // Assert we are in variant 1
        expect(getByText('Headline 1')).toBeTruthy();
        // Assert debug button is rendered
        expect(document.querySelectorAll('h2').length).toEqual(2);
        // Click on debug button
        fireEvent.click(getByText('A/B Test experiment', { exact: false }));
        // Assert debug modal is rendered
        expect(getByText('Test experiment')).toBeTruthy();
        expect(document.querySelectorAll('.debug-modal h2').length).toEqual(2);
        expect(getByTitle('Remove experiment cookie')).toBeTruthy();
        fireEvent.click(getByTitle('Remove experiment cookie'));

        // Click variant 2 in debug modal
        fireEvent.click(document.querySelectorAll('label')[1]);

        // Close debug modal
        fireEvent.click(document.querySelector('.debug-modal h2 span')!);
        expect(document.querySelectorAll('h2').length).toEqual(2);

        // Assert we are in variant 2
        expect(getByText('Headline 2')).toBeTruthy();
    });
});
