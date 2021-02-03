import React from 'react';
import styles from './TextFrame.module.scss';

interface Props {
    alignment?: 'block' | 'right' | any;
    image?: string;
    title: string;
    descriptions: string[];
}

function TextFrame(props: Props) {
    return (
        <div
            className={`${styles.textFrame} ${
                props.alignment === 'right' ? styles.right : ''
            }`}
        >
            <h3 className="heading sans s">{props.title}</h3>

            {props.image && (
                <figure className="fd-teaser-figure">
                    <picture>
                        <source
                            media="(max-width: 640px)"
                            srcSet={`https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=600 1x, https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=1200 2x, https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=1800 3x`}
                        />
                        <source
                            media="(max-width: 860px)"
                            srcSet={`https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=361 1x, https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=722 2x, https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=1083 3x`}
                        />
                        <img
                            src={`https://fd-external-development.imgix.net/${props.image}?auto=format&amp;fm=jpg&amp;fit=max&amp;q=45&amp;w=1280`}
                            alt={props.title}
                        />
                    </picture>
                </figure>
            )}

            {props.descriptions.map((description, idx) => (
                <p
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            ))}
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles.textFrame];
}

export { TextFrame, getCssClassNames };
