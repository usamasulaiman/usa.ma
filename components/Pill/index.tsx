import React from 'react'
import PropTypes from 'prop-types'

function Pill(props) {
  const { color, value, onClick, selected } = props;
  const specialClass = !!selected ? 'selected' : '';
  return (
    <div key={value.id} className={`pill, ${color} ${specialClass}`} onClick={() => onClick(value)}>
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

