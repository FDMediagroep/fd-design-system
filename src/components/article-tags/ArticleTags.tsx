import React from 'react';
import * as styles from './ArticleTags.module.scss';
import {
    ButtonFollow,
    getCssClassNames as getButtonFollowCssClassNames,
} from '../button/ButtonFollow';
import { BellIcon, BellOIcon } from '../../design-tokens/icons';

interface Tag {
    activeButtonText?: string;
    alertSelected?: boolean;
    addTagLink?: string;
    addAlertLink?: string;
    buttonText?: string;
    deleteTagLink?: string;
    deleteAlertLink?: string;
    link?: string;
    selected?: boolean;
    tag: string;
    uuid: string;
}

export interface Props {
    className?: string;
    onDisableAlertClick: (tag: string) => void;
    onEnableAlertClick: (tag: string) => void;
    onFollowClick: (tag: string) => void;
    onUnfollowClick: (tag: string) => void;
    tags: Tag[];
    title?: string;
    titleLink?: string;
}
function ArticleTags(props: Props) {
    const onFollowClick: React.ReactEventHandler<HTMLButtonElement> = (e) => {
        const currentTarget = e.currentTarget;
        if (currentTarget.getAttribute('data-selected') === 'true') {
            props.onUnfollowClick(
                currentTarget.getAttribute('data-tag') as string
            );
        } else {
            props.onFollowClick(
                currentTarget.getAttribute('data-tag') as string
            );
        }
    };

    const onEnableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        props.onEnableAlertClick(
            currentTarget.getAttribute('data-tag') as string
        );
    };

    const onDisableAlertClick: React.ReactEventHandler<HTMLElement> = (e) => {
        const currentTarget = e.currentTarget;
        props.onDisableAlertClick(
            currentTarget.getAttribute('data-tag') as string
        );
    };

    return (
        <div
            className={`${styles['fdArticleTags']}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <h3>
                <a
                    href={`${
                        props.titleLink ? props.titleLink : '/mijn-nieuws'
                    }`}
                >
                    {props.title ? props.title : 'Volgen via mijn nieuws'}
                </a>
            </h3>
            <ul>
                {props.tags.map((tag: Tag) => (
                    <li key={tag.uuid}>
                        <div
                            className={`${styles['tagContainer']}${
                                tag.selected ? ` ${styles['selected']}` : ''
                            }`}
                        >
                            <a
                                href={`${
                                    tag.link ? tag.link : `/tag/${tag.tag}`
                                }`}
                                title={tag.tag}
                            >
                                {tag.tag}
                            </a>
                            <span className={styles['tagControls']}>
                                <span
                                    className={`${styles['alert']}${
                                        tag.alertSelected
                                            ? ` ${styles['selected']}`
                                            : ''
                                    }`}
                                    data-addurl={
                                        tag.addAlertLink
                                            ? tag.addAlertLink
                                            : '/add-alert'
                                    }
                                    data-deleteurl={
                                        tag.addAlertLink
                                            ? tag.addAlertLink
                                            : '/add-alert'
                                    }
                                >
                                    <span
                                        className={styles['defaultIcon']}
                                        data-tag={tag.tag}
                                        onClick={onEnableAlertClick}
                                    >
                                        <BellOIcon />
                                    </span>
                                    <span
                                        className={styles['activeIcon']}
                                        data-tag={tag.tag}
                                        onClick={onDisableAlertClick}
                                    >
                                        <BellIcon />
                                    </span>
                                </span>
                                <ButtonFollow
                                    onClick={onFollowClick}
                                    tag={tag.tag}
                                    selected={tag.selected}
                                    addUrl={tag.addTagLink}
                                    removeUrl={tag.deleteTagLink}
                                    addText={tag.buttonText}
                                    removeText={tag.activeButtonText}
                                />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['fdArticleTags'], ...getButtonFollowCssClassNames()];
}

export { ArticleTags, getCssClassNames };
