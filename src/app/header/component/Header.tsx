import React from 'react';

import { FunctionComponent } from "react";
import Icon from '../../resources/Icon';
import styles from './Header.less'

export type Link = {
    linkUrl: string;
    title: string;
}

export interface HeaderResources {
    logoUrl: Link;
    faqLink: Link;
    homeLink: Link;
    aboutLink: Link;
    singInLink: Link;
    collectionLink: Link;
}

export interface HeaderProps {
    resources: HeaderResources;
    onLogoClick: () => void;
    onFaqClick: () => void;
    onHomeClick: () => void;
    onAboutClick: () => void;
    onSinginClick: () => void;
}

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
    const { resources,
        onLogoClick,
        onFaqClick,
        onHomeClick,
        onAboutClick,
        onSinginClick } = props;

    return (
    <header className={styles.Header}>
        <a className={styles.logo}>
            {resources.logoUrl.title}
        </a>
        <ul className={styles.Header_navbar}>
            <li className={styles.link_waraper}>
                <a className={styles.link} >
                    {resources.homeLink.title}
                </a>
            </li>
            <li className={styles.link_waraper}>
                <a className={styles.link}>
                    {resources.aboutLink.title}
                </a>
            </li>
            <li className={styles.link_waraper}>
                <a className={styles.link}>
                    {resources.collectionLink.title}
                </a>
            </li>
            <li className={styles.link_waraper}>
                <a className={styles.link}>
                    {resources.faqLink.title}
                </a>
            </li>
        </ul>
        <a className={styles.singIn}>
            <Icon icon='sing-in' iconClass={styles.singInIcon}/><span>{resources.singInLink.title}</span>
        </a>
    </header>)
}



export { Header as default }