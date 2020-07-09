import React, { useEffect } from 'react';

export interface Props {
    name: string;
    onClick?: (
        event: React.MouseEvent<HTMLElement>,
        variantName: string
    ) => void;
    onRunVariant?: (variantName: string) => void;
    [x: string]: any;
}

export function Variant(props: Props) {
    useEffect(() => {
        props?.onRunVariant?.(props.name);
    }, []);

    const childrenWithProps = React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
            onClick: (e) => {
                if (props.onClick) {
                    props.onClick(e, props.name);
                }

                if (child.props.onClick) {
                    child.props.onClick(e);
                }
            },
        });
    });
    return (
        <React.Fragment key={props.name}>{childrenWithProps}</React.Fragment>
    );
}
