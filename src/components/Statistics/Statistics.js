import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <li style={{ backgroundColor: getRandomColor() }} className={styles.item} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
}

function getRandomColor() {
    const color = function () {
         return Math.floor(Math.random()*256) };
    return `rgb(${color()}, ${color()}, ${color()})`;
}

export default Statistics;