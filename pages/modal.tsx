import React, { useState, useCallback } from 'react';
import { Explain } from '../src/components/Explain';
import { Modal, getCssClassNames } from '../src/components/modal/Modal';
import Head from 'next/head';
import { Switch } from '../src/components/input/Switch';
import styles from './modal.module.scss';
import { globalCssClassNames } from '../src/utils/globalCssClassNames';

export const metaTitle = 'Modal';
export const metaDescription = 'Modal, used to display a modal overlay';

function Page() {
    const [opened, setOpened] = useState(false);

    const handleModalToggle = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    const handleModalClose = () => {
        setOpened(false);
    };

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
                cssClassNames={[...getCssClassNames(), ...globalCssClassNames]}
                hideExternalCodeEditors={true}
                hidePreview={!opened}
                legend="Modal"
                reactComponentName="Modal"
                description={
                    <>
                        <p>Used as modal overlay.</p>
                        <p>This element is solely used to display a modal.</p>
                        <p>
                            Add the class .fdOpenModal to the root modal element
                            to show the modal.
                        </p>
                        <Switch
                            id="modalSwitch"
                            label={opened ? 'Hide modal' : 'Show modal'}
                            onChange={handleModalToggle}
                            checked={opened}
                        />
                    </>
                }
            >
                <Modal
                    contentBoxClassName={styles.modal}
                    opened={opened}
                    onClose={handleModalClose}
                >
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu pede
                            mollis pretium. Integer tincidunt. Cras dapibus.
                            Vivamus elementum semper nisi. Aenean vulputate
                            eleifend tellus. Aenean leo ligula, porttitor eu,
                            consequat vitae, eleifend ac, enim. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus.
                            Phasellus viverra nulla ut metus varius laoreet.
                            Quisque rutrum. Aenean imperdiet. Etiam ultricies
                            nisi vel augue. Curabitur ullamcorper ultricies
                            nisi. Nam eget dui.
                        </p>
                        <p>
                            Etiam rhoncus. Maecenas tempus, tellus eget
                            condimentum rhoncus, sem quam semper libero, sit
                            amet adipiscing sem neque sed ipsum. Nam quam nunc,
                            blandit vel, luctus pulvinar, hendrerit id, lorem.
                            Maecenas nec odio et ante tincidunt tempus. Donec
                            vitae sapien ut libero venenatis faucibus. Nullam
                            quis ante. Etiam sit amet orci eget eros faucibus
                            tincidunt. Duis leo. Sed fringilla mauris sit amet
                            nibh. Donec sodales sagittis magna. Sed consequat,
                            leo eget bibendum sodales, augue velit cursus nunc,
                            quis gravida magna mi a libero. Fusce vulputate
                            eleifend sapien. Vestibulum purus quam, scelerisque
                            ut, mollis sed, nonummy id, metus. Nullam accumsan
                            lorem in dui. Cras ultricies mi eu turpis hendrerit
                            fringilla. Vestibulum ante ipsum primis in faucibus
                            orci luctus et ultrices posuere cubilia Curae; In ac
                            dui quis mi consectetuer lacinia.
                        </p>
                    </>
                </Modal>
            </Explain>
        </>
    );
}

export default Page;
