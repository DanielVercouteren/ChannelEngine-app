import React from 'react'

export default function Aside({ onClick, children, isOpen, title }) {
  return (
    <>
      <div className={`aside ${isOpen ? 'aside--is-open' : ''}`}>
        <h3 className="aside__title">{title}</h3>
        <div className="aside__close" onClick={onClick}>
          &times;
        </div>
        {children}
      </div>
      {isOpen && <div className="aside-background" onClick={onClick}></div>}
    </>
  )
}
