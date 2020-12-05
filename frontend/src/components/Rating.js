import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span>
        <i
          style={{ color: color }}
          className={
            value >= i
              ? 'fas fa-star'
              : value === i + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
    )
  }

  return <div className='rating'>{stars}</div>
}

Rating.defaultProps = {
  color: '#f8e825'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating
