import React, { useState } from 'react';

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
    const [ openState, setOpenState ] = useState(false);

    const clickMenuItem = (index: number) => {
        setOpenState(false);
        setTimeout(() =>  scrollSmoothHandler(index), 400);
    };

    return (
        <>
        <header className={styles.Header}>
            <div className={styles.menu_container} onClick={() => setOpenState(!openState)}>
                <Icon icon='menu' iconClass={styles.menu}/>
            </div>
            <span className={styles.logo}>
                {resources.logoUrl.title}

                <ul className={[styles.Header_navbar, openState ? styles.open: styles.close].join(' ')}>
                <li className={styles.link_waraper}>
                    <span  className={styles.link} onClick={() => clickMenuItem(0)} >
                        {resources.homeLink.title}
                    </span>
                </li>
                <li className={styles.link_waraper}>
                    <span className={styles.link}  onClick={() => clickMenuItem(1)}>
                        {resources.aboutLink.title}
                    </span>
                </li>
                <li className={styles.link_waraper}>
                    <span className={styles.link}  onClick={() => clickMenuItem(2)}>
                        {resources.collectionLink.title}
                    </span>
                </li>
                <li className={styles.link_waraper}>
                    <span className={styles.link}  onClick={() => clickMenuItem(3)}>
                        {resources.faqLink.title}
                    </span>
                </li>
                <li className={styles.link_waraper}>
                    <span className={styles.link}  onClick={() => clickMenuItem(4)}>
                        {resources.teamLink.title}
                    </span>
                </li>
            </ul>
            </span>

            <a href={resources.singInLink.linkUrl} className={styles.singIn}>
                <Icon icon='sing-in' iconClass={styles.singInIcon}/><span>{resources.singInLink.title}</span>
            </a>
        </header>
        <div className={[styles.mobileNav, openState ? styles.open: styles.close].join(' ')}>
        </div>
    </>
    )
}



export { Header as default }