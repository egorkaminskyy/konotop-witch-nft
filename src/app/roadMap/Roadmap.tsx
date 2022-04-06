import React, { FunctionComponent } from 'react';

import styles from './Roadmap.less'

export interface RoadmapColumn {
    cells: string[];
}

export interface RoadmapTable {
    columns: RoadmapColumn[];
}

export interface RoadmapResources {
    roadmapTitle: string;
    table: RoadmapTable;
}

export interface RoadmapProps {
    resources: RoadmapResources;
}

const Roadmap: FunctionComponent<RoadmapProps> = (props: RoadmapProps) => {
    const { resources } = props;

    return (
    <section id='roadmap' className={styles.Roadmap}>
        <div className={styles.title_container}>
            <div>
                <div className={styles.about_title} dangerouslySetInnerHTML={{ __html: resources.roadmapTitle}}>
                </div>
                <div className={styles.about_description}>
                    <table className={styles.Roadmap_table}>
                        <tbody>
                            {resources.table.columns.map(
                                (column, id) => (
                                    <tr key={id}> 
                                        {column.cells.map((cell, key)=>(
                                            <td key={id + '_' + key}>{cell}</td>
                                        ))}
                                    </tr>
                                )

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>)
}



export { Roadmap as default }