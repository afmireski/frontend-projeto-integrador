import React from "react";
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Nav(){
    return(
            <React.Fragment>
                <nav className={styles.containerHeader}>
                    <ul>
                        <li><Image src="/LOGO.png" alt="Beautiful logo" width={250} height={250} /><Image src="/User_icon_2.png" alt="User icon" width={30} height={30} /></li>
                        <li></li>
                    </ul>
                </nav>
            </React.Fragment>
    );
}