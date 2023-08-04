import React from 'react'
import './button.sass'

const Button = props => {
  const { label, secondaryClass, type, onClick, disabled = false } = props

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`btn ${secondaryClass}`}>
      {label}
    </button>
  )
}

export default Button
