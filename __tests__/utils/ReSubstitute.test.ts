import { ReSubstitute } from '../../src/utils/ReSubstitute';

jest.useFakeTimers();

describe('ReSubstitute', () => {
    const resub = new ReSubstitute();
    const resubBypass = new ReSubstitute(0, true);
    const resubThrottled = new ReSubstitute(500);

    test('should subscribe and be triggered correctly', () => {
        const onTriggerMock = jest.fn();

        resub.subscribe(onTriggerMock);
        resub.trigger();
        expect(onTriggerMock).toHaveBeenCalled();
    });

    test('should subscribe and be able to block triggers correctly', () => {
        const onTriggerMock = jest.fn();

        ReSubstitute.pushTriggerBlock();
        ReSubstitute.pushTriggerBlock();

        resub.subscribe(onTriggerMock);
        resub.trigger();
        expect(onTriggerMock).toBeCalledTimes(0);

        ReSubstitute.popTriggerBlock();
        expect(onTriggerMock).toBeCalledTimes(0);

        ReSubstitute.popTriggerBlock();
        expect(onTriggerMock).toBeCalledTimes(1);
    });

    test('should be able to bypass block correctly', () => {
        const onTriggerMock = jest.fn();
        const onBypassTriggerMock = jest.fn();

        ReSubstitute.pushTriggerBlock();

        resub.subscribe(onTriggerMock);
        resubBypass.subscribe(onBypassTriggerMock);
        resub.trigger();
        resubBypass.trigger();
        expect(onTriggerMock).toBeCalledTimes(0);
        expect(onBypassTriggerMock).toBeCalledTimes(1);

        ReSubstitute.popTriggerBlock();
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onBypassTriggerMock).toBeCalledTimes(1);
    });

    test('should subscribe and unsubscribe correctly', () => {
        const onTriggerMock = jest.fn();

        const subToken = resub.subscribe(onTriggerMock);
        resub.unsubscribe(subToken);
        resub.trigger();
        expect(onTriggerMock).toBeCalledTimes(0);
    });

    test('should subscribe by key and be triggered correctly', () => {
        const onTriggerMock = jest.fn();
        const onKeyTriggerMock = jest.fn();

        // Subscribe to all events
        resub.subscribe(onTriggerMock);
        // Subscribe only to key
        resub.subscribe(onKeyTriggerMock, 'testKey');

        resub.trigger();
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        resub.trigger('testKey');
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(1);
    });

    test('should subscribe by multiple keys and be triggered correctly', () => {
        const onTriggerMock = jest.fn();
        const onKeyTriggerMock = jest.fn();
        const onKey2TriggerMock = jest.fn();
        const onKey3TriggerMock = jest.fn();

        // Subscribe to all events
        resub.subscribe(onTriggerMock);
        // Subscribe only to key
        resub.subscribe(onKeyTriggerMock, 'testKey');
        resub.subscribe(onKey2TriggerMock, 'testKey2');
        resub.subscribe(onKey3TriggerMock, 'testKey3');

        expect(onTriggerMock).toBeCalledTimes(0);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);
        resub.trigger();
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);
        resub.trigger(['testKey', 'testKey2']);
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(1);
        expect(onKey2TriggerMock).toBeCalledTimes(1);
        expect(onKey3TriggerMock).toBeCalledTimes(0);
    });

    test('should subscribe by multiple keys and be able to delay triggers correctly', () => {
        const onTriggerMock = jest.fn();
        const onKeyTriggerMock = jest.fn();
        const onKey2TriggerMock = jest.fn();
        const onKey3TriggerMock = jest.fn();

        // Subscribe to all events
        resubThrottled.subscribe(onTriggerMock);
        // Subscribe only to key
        resubThrottled.subscribe(onKeyTriggerMock, 'testKey');
        resubThrottled.subscribe(onKey2TriggerMock, 'testKey2');
        resubThrottled.subscribe(onKey3TriggerMock, 'testKey3');

        expect(onTriggerMock).toBeCalledTimes(0);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);
        resubThrottled.trigger();
        expect(onTriggerMock).toBeCalledTimes(0);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);

        jest.advanceTimersByTime(1000);
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);

        resubThrottled.trigger(['testKey', 'testKey2']);
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(0);
        expect(onKey2TriggerMock).toBeCalledTimes(0);
        expect(onKey3TriggerMock).toBeCalledTimes(0);

        jest.advanceTimersByTime(1000);
        expect(onTriggerMock).toBeCalledTimes(1);
        expect(onKeyTriggerMock).toBeCalledTimes(1);
        expect(onKey2TriggerMock).toBeCalledTimes(1);
        expect(onKey3TriggerMock).toBeCalledTimes(0);
    });
});
