import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {

  return (
    <div className="primary-pink-button-container">

      <button className="primary-pink-button-button button ButtonSmall" onClick={props.handleClick}>
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton
