import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPrimary = ({text, styles, to}) => {
  const navigate = useNavigate();
  return (
    <button className='primary-btn' onClick={()=>navigate(to)} style={styles}>{text}</button>
  )
}

export default ButtonPrimary
