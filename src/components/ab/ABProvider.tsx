import React from 'react';
import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

type Cookies = {
    [experimentName: string]: string;
};

export const ABContext = createContext<[Cookies, (cookies: Cookies) => void]>([
    {},
    () => {},
]);

interface Props {
    initialState?: Cookies;
    [x: string]: any;
}

export function ABProvider(props: Props) {
    const [cookies, setCookies] = useState(
        props.initialState || Cookies.get() || {}
    );

    return (
        <ABContext.Provider value={[cookies, setCookies]}>
            {props.children}
        </ABContext.Provider>
    );
}
