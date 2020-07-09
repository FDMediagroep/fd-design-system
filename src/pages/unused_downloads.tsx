import React from "react";
import styles from "./downloads.module.scss";

function Downloads() {
    return (
        <section className={styles.downloads}>
            <h1>Download links</h1>
            <ul>
                <li>
                    <a
                        href="https://fontawesome.com/icons?d=gallery&amp;m=free"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Free icons
                    </a>
                </li>
                <li>
                    <a
                        href="https://fdmg-my.sharepoint.com/:f:/g/personal/beukers_fd_nl/Eiquk3aZ67dFnUrYoou4IfUB34jY5Qmo60douOTIdeJSxw?e=DUXini"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Guidelines (sharepoint)
                    </a>
                </li>
                <li>
                    <a
                        href="./assets/icons.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Icon font
                    </a>
                </li>
                <li>
                    <a
                        href="https://fdmg-my.sharepoint.com/:f:/g/personal/beukers_fd_nl/EgvWsK7mLHVKhHDCCazk8rwB9PpiqS6FbdM_j9yGaMoTTg?e=VzZaBG"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Infographics (sharepoint)
                    </a>
                </li>
                <li>
                    <a
                        href="./assets/2019 logo FDMG.zip"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Logos
                    </a>
                </li>
                <li>
                    <a
                        href="https://fdmg-my.sharepoint.com/:f:/g/personal/beukers_fd_nl/EsmUP04xOBpFsTtJUUr2u14BOnGgUJmnkiL_OvwIpjS84w?e=NfQLyT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Marketing (sharepoint)
                    </a>
                </li>
                <li>
                    <a
                        href="https://fdmg-my.sharepoint.com/:f:/g/personal/beukers_fd_nl/EjYQHCrR5MZNraA_AMM8lFUBAL-Pm_umIJQ7N6ONzFgpRA?e=1QXkaL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sales (sharepoint)
                    </a>
                </li>
                <li>
                    <a
                        href="https://fdmg-my.sharepoint.com/:f:/g/personal/beukers_fd_nl/Eqdm2vzh1-tAlcD5xImtKc4BvjKqDemiUme2T2TqVF3kNw?e=sYqgXb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Templates (sharepoint)
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Downloads;
