import React, { FunctionComponent } from 'react';
import { Link } from '../header/component/Header';
import Icon from '../resources/Icon';

import styles from './Team.less'

export interface TeamLink extends Link {
    description: string;
}

export enum ContactType {
    MOBILE = 'mobile',
    TELEGRAM = 'telegram',
    INSTAGRAM = 'instagram',
    EMAIL = 'email'
}

export interface Contact extends Link {
    title: string;
    type: ContactType;
}

export interface TeamResources {
    teamTitle: string;
    teamDescription: string;
    collection: TeamLink[];
    contacts: Contact[];
}

export interface TeamProps {
    resources: TeamResources;
}

const Team: FunctionComponent<TeamProps> = (props: TeamProps) => {
    const { resources } = props;

    return (
    <section id='collection' className={styles.Collection}>
        <div className={styles.collection_title}>
            {resources.teamTitle}
        </div>
        <div className={styles.collection_description}>
            {resources.teamDescription}
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
                    <a href={item.linkUrl} target="_blank" rel="noreferrer" className={styles.description}>
                        {item.description}
                    </a>
                </div>
            </div>))}
        </div>
        <div className={styles.contact_container}>
            {resources.contacts.map((item, key) => (
                <a href={item.linkUrl} target="_blank" className={styles.contact} key={key} rel="noreferrer"><Icon icon={item.type} key={key}/>{item.title}</a>
            ))}
        </div>
    </section>)
}



export { Team as default }