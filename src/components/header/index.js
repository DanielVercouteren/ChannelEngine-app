import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src='images/vercel.svg' alt='' className="header__logo" />
          </div>
          <div className="offset-sm-4 col-sm-4">
            <div className="header__links">
              <Link href='/' as='/'>
                <a className="header__link">My orders</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
