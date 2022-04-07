import React from 'react';

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
    teamLink: Link;
    aboutLink: Link;
    singInLink: Link;
    collectionLink: Link;
}

export interface HeaderProps {
    resources: HeaderResources;
    scrollSmoothHandler: (i: number) => void;
}

const Header = (props: HeaderProps) => {
    const { resources, scrollSmoothHandler } = props;

    return (
    <header className={styles.Header}>
        <span className={styles.logo}>
            {resources.logoUrl.title}
        </span>
        <ul className={styles.Header_navbar}>
            <li className={styles.link_waraper}>
                <span  className={styles.link} onClick={() => scrollSmoothHandler(0)} >
                    {resources.homeLink.title}
                </span>
            </li>
            <li className={styles.link_waraper}>
                <span className={styles.link}  onClick={() => scrollSmoothHandler(1)}>
                    {resources.aboutLink.title}
                </span>
            </li>
            <li className={styles.link_waraper}>
                <span className={styles.link}  onClick={() => scrollSmoothHandler(2)}>
                    {resources.collectionLink.title}
                </span>
            </li>
            <li className={styles.link_waraper}>
                <span className={styles.link}  onClick={() => scrollSmoothHandler(3)}>
                    {resources.faqLink.title}
                </span>
            </li>
            <li className={styles.link_waraper}>
                <span className={styles.link}  onClick={() => scrollSmoothHandler(4)}>
                    {resources.teamLink.title}
                </span>
            </li>
        </ul>
        <a href={resources.singInLink.linkUrl} className={styles.singIn}>
            <Icon icon='sing-in' iconClass={styles.singInIcon}/><span>{resources.singInLink.title}</span>
        </a>
    </header>)
}



export { Header as default }