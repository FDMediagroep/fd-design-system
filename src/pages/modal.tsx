import React, { useState, useCallback } from 'react';
import { Explain } from '../components/Explain';
import { Modal, getCssClassNames } from '../components/modal/Modal';
import Head from 'next/head';
import { Switch } from '../components/input/Switch';

const metaTitle = 'Modal';
const metaDescription = 'Modal, used to display an modal overlay';

function Page() {
    const [opened, setOpened] = useState(false);

    const handleModalToggle = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    const handleModalClose = useCallback(() => {
        setOpened(false);
    }, [opened]);

    return (
        <>
            <Head>
                <title>
                    {metaTitle} - Design System - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={getCssClassNames()}
                hideExternalCodeEditors={true}
                hidePreview={!opened}
                legend="Modal"
                reactComponentName="Modal"
                description={
                    <>
                        <p>Used as modal overlay.</p>
                        <p>This element is solely used to display a modal.</p>
                        <Switch
                            id="modalSwitch"
                            label={opened ? 'Hide modal' : 'Show modal'}
                            onChange={handleModalToggle}
                            checked={opened}
                        />
                    </>
                }
            >
                <Modal opened={opened} onClose={handleModalClose}>
                    <>
                        <h2>Abonnement wijzigen of opzeggen</h2>
                        <p>
                            Voor wijzigingen kunt u elk moment bellen. Voor
                            opzeggen geeft u dit uiterlijk 1 maand voor het
                            einde van de abonnements- of actieperiode
                            telefonisch door aan Klantenservice
                        </p>
                        <p>
                            <a href="tel:0800 666 6667">0800 666 6667</a>{' '}
                            (gratis, ma t/m vr 07.30 - 18.00 uur en za 07.30 -
                            11.30 uur).
                        </p>
                        <p>
                            Ook kijken we graag samen met u naar een
                            abonnementsvorm die wellicht beter bij u past.
                        </p>
                    </>
                </Modal>
            </Explain>
        </>
    );
}

export default Page;
