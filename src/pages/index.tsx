import React from "react";
import styles from "./index.module.scss";

function Page() {
    return (
        <section className={styles.index}>
            <h1>FD Design System</h1>
            <p>
                This is a collection of all the styled components for FD.nl.
                Components found here are styled according to the FD Style
                Guide.
            </p>
        </section>
    );
}

export default Page;
