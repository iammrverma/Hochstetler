import React from 'react'

const ButtonPrimary = ({text, styles}) => {
  return (
    <button className='primary-btn' style={styles}>{text}</button>
  )
}

export default ButtonPrimary
