import React, { forwardRef, FunctionComponent } from 'react';

import { Link } from '../../header/component/Header';
import styles from './About.less'

export interface AboutResources {
    buyNft: Link;
    aboutTitle: string;
    aboutDescription: string;
}

export interface AboutProps {
    resources: AboutResources;
}

const About = (props: AboutProps, ref: any) => {
    const { resources } = props;

    return (
    <section id='about' ref={ref} className={styles.About}>
        <div className={styles.title_container}>
            <div>
                <div className={styles.about_title} dangerouslySetInnerHTML={{ __html: resources.aboutTitle}}>
                </div>
                <div className={styles.about_description} dangerouslySetInnerHTML={{ __html: resources.aboutDescription}}>
                </div>
            </div>
            <div className={styles.elipce_container}>
                <div className={styles.elipce_blue}>

                </div>
                <div className={styles.elipce_yellow}>
                    
                </div>
            </div>
        </div>
        <a href={resources.buyNft.linkUrl} className={styles.button_container}>
            {resources.buyNft.title}
        </a>
    </section>)
}

export default forwardRef(About)