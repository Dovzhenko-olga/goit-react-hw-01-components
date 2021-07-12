import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendList.module.css'

const FriendList = ({ friends}) => (
  <ul className={styles.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={styles.item} key={id}>
       <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired,
}

export default FriendList;