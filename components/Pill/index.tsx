import React from 'react'
import PropTypes from 'prop-types'
import styles from './Pill.module.css';
function Pill(props) {
  const { color, value, onClick, selected } = props;
  const specialClass = !!selected ? styles.selected : '';
  return (
    <div key={value.id} className={`${styles.pill} ${styles[color]} ${specialClass}`} onClick={() => onClick(value)}>
      <span>{value.text}</span>
    </div>
  )
}

Pill.propTypes = {
  value: PropTypes.shape({}).isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

Pill.propTypes = {
  color: 'red',
  onClick: null,
  selected: false,
}

export default Pill

