import React from 'react'

const Header = ({children, stylex}) => {
  return (
    <div className={`text-7xl font-bold  ${stylex} text-center `}>
      {children}
    </div>
  )
}

export default Header
