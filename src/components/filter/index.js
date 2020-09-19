import React from 'react'

export default function Filter({title, options, onFilter}) {
  return (
    <div className="filter">
      <p className="filter__title">{title}</p>
      <ul className="filter__items">
        {options.map(option => {
          return (
            <li className="filter__item">
              <label>
                <input
                  type="checkbox"
                  name={option.name}
                  checked={option.isSelected }
                  onClick={onFilter}
                  className="filter__checkbox"
                />
                  {option.title ?? option.name}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
