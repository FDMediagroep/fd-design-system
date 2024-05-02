import React from 'react';
import * as styles from './FinancialAgenda.module.scss';

type AgendaItem = {
    date: string;
    source: string;
    description: string;
};

interface Props {
    agendaItems?: AgendaItem[];
}

function FinancialAgenda(props: Props) {
    return (
        <div className={styles['financialAgenda']}>
            <table>
                <thead>
                    <tr>
                        <th>
                            Datum:
                            <b />
                        </th>
                        <th>
                            <b>Bedrijf/land:</b>
                        </th>
                        <th>
                            <b>Betreft:</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props?.agendaItems?.map((agendaItem) => (
                        <tr
                            key={`${agendaItem.date}-${agendaItem.source}-${agendaItem.description}`}
                        >
                            <td>{agendaItem.date}</td>
                            <td>{agendaItem.source}</td>
                            <td>{agendaItem.description}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2} align="center">
                            Bron: FD Research
                        </th>
                        <td>*=voorlopige datum</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

function getCssClassNames(): string[] {
    return [styles['financialAgenda']];
}

export { FinancialAgenda, getCssClassNames };
