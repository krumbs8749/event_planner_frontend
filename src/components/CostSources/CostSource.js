import React from 'react'
import styles from "./cost-source.module.scss"

export const CostSource = ({costs}) => {
  return (
    <div className={styles.costsTableContainer}>
        <table className={styles.costsTable}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Cost ($)</th>
            </tr>
            </thead>
            <tbody>
            {costs.map((cost) => (
                <tr key={cost.id}>
                <td>{cost.name}</td>
                <td>{cost.description}</td>
                <td>{cost.category}</td>
                <td>{cost.cost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  )
}
