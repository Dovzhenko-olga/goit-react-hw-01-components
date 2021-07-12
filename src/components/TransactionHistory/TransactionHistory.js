import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
  <thead>
    <tr>
      <th className={styles.head}>Type</th>
      <th className={styles.head}>Amount</th>
      <th className={styles.head}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}className={styles.row}>
        <td className={styles.item}>{type}</td>
        <td className={styles.item}>{amount}</td>
        <td className={styles.item}>{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
}

export default TransactionHistory;