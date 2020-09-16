import React from 'react'

export default function Address({
  title,
  firstName,
  lastName,
  streetName,
  houseNumber,
  addition,
  zipCode,
  city
}) {
  return (
    <div className="address">
      <p className="address_title">{title}</p>
      {firstName} {lastName} <br />
      {streetName} {houseNumber}{addition} <br />
      {zipCode} {city}
    </div>
  )
}
