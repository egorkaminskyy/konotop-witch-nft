import React, { FunctionComponent } from 'react';
import { Link } from '../header/component/Header';

import styles from './Footer.less'

export interface FooterResources {
    footerBuyNft: Link;
    footerTitle: string;
    designedBy: string;
}

export interface FooterProps {
    resources: FooterResources;
}

const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
    const { resources } = props;

    return (
    <section id='footer' className={styles.Footer}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: resources.footerTitle}}></div>
        <a className={styles.buyNft} href='/'>{resources.footerBuyNft.title}</a>
        <div className={styles.design} dangerouslySetInnerHTML={{ __html: resources.designedBy}}></div>
    </section>);
}



export { Footer as default }