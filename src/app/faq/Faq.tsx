import React, { forwardRef, FunctionComponent, useEffect, useState } from 'react';
import Icon from '../resources/Icon';

import styles from './Faq.less'

export interface FaqTopics {
    title: string;
    description: string;
    isActive: boolean;
}

export interface FaqResources {
    title: string;
    collection: FaqTopics[];
}

export interface FaqProps {
    resources: FaqResources;
}

const Faq = (props: FaqProps, ref: any) => {
    const { title, collection } = props.resources;
    const [ items, setCollection] = useState({collection});
    
    const onUpdateItem = (status: boolean, key: number) => {
        collection[key].isActive = status;
        setCollection({collection});
    };
    return (
    <section id='faq' ref={ref} className={styles.Faq}>
        <div className={styles.title}>
            {title}
        </div>
        {items.collection.map((item , key) => (
            <div key={key} className={ [styles.topic, item.isActive ? styles.active : ''].join(' ').trim()}
                onClick={() => onUpdateItem(!item.isActive , key)}
            >
                <div className={styles.item}>
                    <div className={styles.topic_title}>
                        {item.title}

                    </div>
                    <p className={styles.chevron}>
                        <Icon icon='chevron' iconClass={styles.chevron_icon} />
                    </p>
                </div>
                
                <div className={styles.topic_description}>
                    {item.description}
                </div>
            </div>
        ))}
    </section>)
}

export default forwardRef(Faq);