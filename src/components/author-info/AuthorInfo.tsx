import React from 'react';
import styles from './AuthorInfo.module.scss';
import {
    ButtonFollow,
    getCssClassNames as getFollowButtonCssClassNames,
} from '../button/ButtonFollow';
import {
    Button,
    getCssClassNames as getButtonCssClassNames,
} from '../button/Button';
import {
    EnvelopeIcon,
    LinkedInIcon,
    TwitterIcon,
} from '../../design-tokens/icons';

export interface Props {
    className?: string;
    title: string;
    description: JSX.Element;
    followButtonText?: string;
    followed?: boolean;
    imageUrl: string;
    onEmailClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onFollowAuthorClick?: (follow: boolean) => void;
    onLinkedInClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onTwitterClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AuthorInfo(props: Props) {
    const onFollowAuthorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onFollowAuthorClick) {
            props.onFollowAuthorClick(
                e.currentTarget.getAttribute('data-selected') !== 'true'
            );
        }
    };

    return (
        <div
            className={`${styles.fdAuthorInfo}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <div className={styles.profile}>
                <img src={props.imageUrl} alt={props.title} />
                <h3>{props.title}</h3>
                <div className={styles.description}>{props.description}</div>
            </div>
            <div className={styles.controls}>
                <ButtonFollow
                    className={styles.followButton}
                    selected={props.followed}
                    tag={props.title}
                    onClick={onFollowAuthorClick}
                    addText={props.followButtonText ?? 'Volg deze auteur'}
                />
                {props.onEmailClick ? (
                    <Button
                        className={styles.button}
                        onClick={props.onEmailClick}
                    >
                        <span
                            className={styles.icon}
                            dangerouslySetInnerHTML={{ __html: EnvelopeIcon }}
                        />
                        <span className={styles.buttonText}>E-mail</span>
                    </Button>
                ) : null}
                {props.onTwitterClick ? (
                    <Button
                        className={styles.button}
                        onClick={props.onTwitterClick}
                    >
                        <span
                            className={styles.icon}
                            dangerouslySetInnerHTML={{ __html: TwitterIcon }}
                        />
                        <span className={styles.buttonText}>Twitter</span>
                    </Button>
                ) : null}
                {props.onLinkedInClick ? (
                    <Button
                        className={styles.button}
                        onClick={props.onLinkedInClick}
                    >
                        <span
                            className={styles.icon}
                            dangerouslySetInnerHTML={{ __html: LinkedInIcon }}
                        />
                        <span className={styles.buttonText}>LinkedIn</span>
                    </Button>
                ) : null}
            </div>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [
        styles.fdAuthorInfo,
        ...getFollowButtonCssClassNames(),
        ...getButtonCssClassNames(),
    ];
}

export { AuthorInfo, getCssClassNames };
