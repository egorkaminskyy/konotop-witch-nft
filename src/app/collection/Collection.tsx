import { url } from 'inspector';
import React, { forwardRef, FunctionComponent } from 'react';
import { Link } from '../header/component/Header';

import styles from './Collection.less'

export interface RoadmapLink extends Link {
    description: string;
}

export interface CollectionResources {
    collectionTitle: string;
    collection: RoadmapLink[];
    viewMoreButton: Link;
}

export interface CollectionProps {
    resources: CollectionResources;
}

const Collection = (props: CollectionProps, ref: any) => {
    const { resources } = props;

    return (
    <section id='collection' ref={ref} className={styles.Collection}>
        <div className={styles.collection_title}>
            {resources.collectionTitle}
        </div>
        <div className={styles.collection_container}>
            {resources.collection.map((item, key) => (<div className={styles.item} key={key}>
                <div className={styles.nft} 
                    style={{
                        backgroundImage: `url('${require('./../../img/' + item.linkUrl)}')`
                    }}
                ></div>
                <div className={styles.text_container}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div className={styles.description}>
                        {item.description}
                    </div>
                </div>
            </div>))}
        </div>
        <div className={styles.button_container}>
            {resources.viewMoreButton.title}
        </div>
    </section>)
}



export default forwardRef(Collection);