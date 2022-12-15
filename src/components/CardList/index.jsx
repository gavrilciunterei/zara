import React from 'react'

const CardList = ({children}) => {
  return (
    <div className="flex flex-wrap justify-center">
        {children}
    </div>
  )
}

export default CardList