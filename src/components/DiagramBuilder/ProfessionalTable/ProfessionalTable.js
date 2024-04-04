import React from 'react';
import Link from 'next/link';
import styles from './ProfessionalTable.module.scss'; // Make sure to create this CSS module

const ProfessionalTable = ({ title, data, rateName, rateCalc }) => {

    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.title}>{title}</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Budget</th>
                        <th>{rateName}</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}</td>
                        <td>{item.totalCost}</td>
                        <td>{rateCalc(item)}</td>
                        <td>
                        <Link href={`/events/event-board?eventId=${item.id}`}>
                            <button className={styles.actionButton}>→</button>
                        </Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfessionalTable;
