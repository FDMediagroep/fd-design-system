import React, { useState, useEffect, useContext } from 'react';
import { Props as VariantProps } from './Variant';
import Cookies from 'js-cookie';
import { ABContext } from './ABProvider';
import ReactDOM from 'react-dom';
import { Debug } from './Debug';
import { Props as Variant } from './Variant';
import { Button } from '../button/Button';

interface Experiment {
    debug?: boolean;
    debugRoot?: HTMLElement;
    debugUriParam?: string;
    /**
     * Unique name of the Experiment.
     * Used in reporting.
     */
    name: string;
    onClick?: (
        event: React.MouseEvent<HTMLElement>,
        experimentName: string,
        variantName: string
    ) => void;
    /**
     * This callback is executed when a Variant has been loaded
     */
    onRunExperiment?: (experimentName: string, variantName: string) => void;
    /**
     * Custom variant picker. By default a Variant is chosen with Math.random()
     * By providing your own function you can determine how a Variant is chosen.
     * Variants[] are the Variant components passed as children.
     * Return of the function is the index of the Variant to be run.
     */
    pickVariant?: (variants: React.ReactElement<Variant, any>[]) => number;
    children: React.ReactElement<VariantProps, any>[];
    MAX_AGE?: number;
}

function pickVariant(variants: React.ReactElement<Variant, any>[]) {
    const pickedVariant = Math.floor(Math.random() * variants.length);
    return pickedVariant;
}

const MAX_AGE = 30; // 30 days

export function Experiment(props: Experiment) {
    const [debug, setDebug] = useState(props.debug ?? false);
    const [cookies, setCookies] = useContext(ABContext);
    const [variant, setVariant] = useState(
        cookies[encodeURIComponent(props.name)]
            ? parseInt(cookies[encodeURIComponent(props.name)], 10)
            : -1
    );
    const [open, setOpen] = React.useState(false);

    /**
     * Component did mount
     * We pick a variant if none has been set.
     */
    useEffect(() => {
        if (variant === -1) {
            const pickedVariant = props.pickVariant
                ? props.pickVariant(props.children)
                : pickVariant(props.children);
            setVariant(pickedVariant);
        }
        if (!props.debug) {
            setDebug(
                !!(
                    props.debugUriParam &&
                    window.location.href.indexOf(props.debugUriParam) > -1
                )
            );
        }
    }, []);

    /**
     * Whenever the variant changes value we change the value in the cookie as well.
     */
    useEffect(() => {
        if (variant !== -1) {
            let newCookies: any = {};
            if (cookies) {
                newCookies = {
                    ...cookies,
                    [encodeURIComponent(props.name)]: variant,
                };
            }
            setCookies(newCookies);
            Cookies.set(props.name, `${variant}`, {
                expires: props.MAX_AGE ?? MAX_AGE,
            });
        }
    }, [variant]);

    /**
     * Remove the experiment from the cookie
     * @param experimentName
     */
    function removeExperiment(experimentName: string) {
        let newCookies: any = {};
        if (cookies) {
            newCookies = { ...cookies };
        }
        const {
            [encodeURIComponent(experimentName)]: _,
            ...trimmedCookies
        } = newCookies;
        Cookies.remove(experimentName);
        setCookies(trimmedCookies);
    }

    /**
     * Inject some extra functionality into the child Variant components.
     * These are mostly callbacks for reporting purposes.
     */
    const childrenWithProps = React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
            onClick: (
                e: React.MouseEvent<HTMLElement>,
                variantName: string
            ) => {
                if (props.onClick) {
                    props.onClick(e, props.name, variantName);
                }

                if (child.props.onClick) {
                    child.props.onClick(e, variantName);
                }
            },
            onRunVariant: (variantName: string) => {
                if (props.onRunExperiment) {
                    props.onRunExperiment(props.name, variantName);
                }
                if (child.props.onRunVariant) {
                    child.props.onRunVariant(variantName);
                }
            },
        });
    });

    /**
     * Open debug settings dialog
     */
    const handleOpen = () => {
        setOpen(true);
    };

    /**
     * Close debug settings dialog
     */
    const handleClose = () => {
        setOpen(false);
    };

    /**
     * Change the variant through the debug settings
     * @param e
     */
    function debugChange(e: React.ChangeEvent<HTMLInputElement>) {
        setVariant(parseInt(e.currentTarget.value, 10));
    }

    return (
        <>
            {childrenWithProps.length < 2 ? childrenWithProps : null}
            {variant > -1 ? childrenWithProps[variant] : null}

            {typeof document !== 'undefined' && debug
                ? ReactDOM.createPortal(
                      <Button
                          style={{
                              position: 'sticky',
                              bottom: '0',
                              margin: '.5rem',
                          }}
                          onClick={handleOpen}
                      >
                          A/B {props.name} ({variant + 1}∈
                          {childrenWithProps.length})
                      </Button>,
                      props.debugRoot ||
                          (document.querySelector('body') as HTMLElement)
                  )
                : null}

            {typeof document !== 'undefined' && debug
                ? ReactDOM.createPortal(
                      <Debug
                          debugChange={debugChange}
                          handleClose={handleClose}
                          handleRemoveExperiment={removeExperiment}
                          open={open}
                          name={props.name}
                          variant={variant}
                      >
                          {childrenWithProps}
                      </Debug>,
                      document.querySelector('body') as HTMLElement
                  )
                : null}
        </>
    );
}
