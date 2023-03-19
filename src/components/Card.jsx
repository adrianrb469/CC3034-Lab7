import React from 'react'
import './Card.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

function Card({ info }) {
  const [img, title, paragraph, link] = info
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="paragraph">
        {paragraph}{' '}
        <a href={link} className="link">
          {link}
        </a>
      </p>
    </div>
  )
}

Card.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card
