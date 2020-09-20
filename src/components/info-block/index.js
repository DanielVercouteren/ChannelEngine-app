import React from 'react'

export default function InfoBlock({ title, children }) {
  return (
    <div className="info-block">
      <p className="info-block__title">{title}</p>
      <div className="info-block__info">
        {children}
      </div>
    </div>
  )
}
