import React, { FunctionComponent } from 'react';

import { Link } from '../../header/component/Header';
import styles from './Home.less'

export interface HomeResources {
    buyNft: Link;
    helpUkraine: Link;
    homeTitle: string;
    homeDescription: string;
}

export interface HomeProps {
    resources: HomeResources;
    onBuyNftClick: () => void;
    onHelpUkraineClick: () => void;
}

const Home: FunctionComponent<HomeProps> = (props: HomeProps) => {
    const { resources, onBuyNftClick, onHelpUkraineClick} = props;

    return (
    <section id='home' className={styles.Home}>
        <div>
            <div className={styles.image_witch}>

            </div>
        </div>
        <div>
            <div className={styles.title_container}>
                <div className={styles.home_title} dangerouslySetInnerHTML={{ __html: resources.homeTitle}}>
                    
                </div>
                <div className={styles.home_descriptin} dangerouslySetInnerHTML={{ __html: resources.homeDescription}}>
                </div>
            </div>
            <div className={styles.button_container}>
                <div className={styles.button_buy}>
                    {resources.buyNft.title}
                </div>
                <div className={styles.button_help}>
                    {resources.helpUkraine.title}
                </div>
            </div>
        </div>
    </section>)
}



export { Home as default }