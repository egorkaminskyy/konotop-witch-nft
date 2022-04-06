import React, { FunctionComponent } from 'react';

import { Link } from '../../header/component/Header';
import styles from './About.less'

export interface AboutResources {
    buyNft: Link;
    aboutTitle: string;
    aboutDescription: string;
}

export interface AboutProps {
    resources: AboutResources;
    onBuyNftClick: () => void;
}

const About: FunctionComponent<AboutProps> = (props: AboutProps) => {
    const { resources, onBuyNftClick } = props;

    return (
    <section id='about' className={styles.About}>
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
        <div className={styles.button_container}>
            {resources.buyNft.title}
        </div>
    </section>)
}



export { About as default }