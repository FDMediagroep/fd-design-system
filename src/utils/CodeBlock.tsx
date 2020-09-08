import React from 'react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

Lowlight.registerLanguage('javascript', javascript);
Lowlight.registerLanguage('js', javascript);
Lowlight.registerLanguage('typescript', typescript);

interface Props {
    language: string;
    value: string;
}

export default function CodeBlock(props: Props) {
    console.log('LANG', props.language);
    return (
        <Lowlight
            language={props.language || 'typescript'}
            value={props.value}
        />
    );
}
