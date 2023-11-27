import React from 'react';
import { ButtonFollow } from '../button/ButtonFollow';
import styles from './RelatedTopics.module.scss';

type Topic = {
    topic: string;
    href: string;
    selected?: boolean;
    onClick?: (event: React.MouseEvent) => void;
};

interface Props {
    topics: Topic[];
}

function RelatedTopics(props: Props) {
    return (
        <section className={`${styles['fd-related-topics']} xs__mb+8`}>
            <h3 className="heading sans s xs__p+4">Gerelateerde onderwerpen</h3>
            <ul className="xs__p+4">
                {props.topics.map((topic) => {
                    return (
                        <li key={topic.topic} className="xs__mb+4">
                            <a href={topic.href}>
                                <span className="heading sans xs">
                                    {topic.topic}
                                </span>
                            </a>
                            <ButtonFollow
                                tag={topic.topic}
                                key={topic.topic}
                                selected={topic.selected}
                                onClick={topic.onClick}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function getCssClassNames(): string[] {
    return [styles['fd-related-topics']];
}

export { RelatedTopics, getCssClassNames };
