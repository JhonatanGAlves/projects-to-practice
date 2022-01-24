import React from 'react'
import './styles.css'

export const Header = () => {
  return (
    <div className='container-header'>
      <div className='header-left'>
        <h2>PROJETOS</h2>
      </div>
      <div className='header-right'>
        <h1>TÍTULO DO PROJETO</h1>
      </div>
    </div>
  )
}

export default Header