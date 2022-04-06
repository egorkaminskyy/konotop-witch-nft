import React, { useEffect, useState } from 'react';
import { Link } from '../header/component/Header';

import styles from './Mint.less'


export interface MintResources {
    title: string;
    description: string;
    fildTitle: string;
    mintButton: Link;
    cryptoCurrency: string;
    multipliaer: number;
}

export interface MintProps {
    resources: MintResources;
}

const Mint = (props: MintProps) => {
    const { title, description, fildTitle, mintButton, cryptoCurrency, multipliaer } = props.resources;
    const [ count, setCount] = useState(1);
    
    const add = () => {
        setCount(Math.round(count + 1));
    }

    const minus = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    }

    useEffect(() => {

    });

    // const onUpdateItem = (status: boolean, key: number) => {
    //     collection[key].isActive = status;
    //     setCollection({collection});
    // };
    return (
    <section id='mint' className={styles.Mint}>
        <div className={styles.topic}>
            <div className={styles.topic_title}>
                {title}
            </div>
            <div className={styles.topic_description}>
                {description}
            </div>
            <div className={styles.common_field}>
                <div className={styles.field_title}>
                    {fildTitle}
                </div>
                <div className={styles.main}>
                    {Math.round(count * multipliaer) + ' ' + cryptoCurrency} Each
                </div>
                <div className={styles.field_title}>
                    49 / 1836 minted
                </div>
            </div>

            <div className={styles.add_field}>
                <div className={[styles.field_title, styles.add_action].join(' ')}
                    onClick={minus}
                >
                    -
                </div>
                <div className={styles.main}>
                    {count}
                </div>
                <div className={[styles.field_title, styles.add_action].join(' ')}
                    onClick={add}
                >
                    +
                </div>
            </div>

            <div className={styles.total_field}>
                <div className={styles.field_title}>
                    Total:
                </div>
                <div className={styles.field_title}>
                    {Math.round(count * multipliaer * 100) / 100 } {cryptoCurrency}
                </div>
            </div>

            <a href={mintButton.linkUrl} className={styles.mint_button}>
                <div className={styles.main}>
                    {mintButton.title}
                </div>
            </a>
        </div>
    </section>)
}

export { Mint as default }