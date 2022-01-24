import React from 'react'
import './styles.css'
import { Route, Routes } from 'react-router-dom'

export const LateralMenu = () => {
  return (
    <div className='container-lateral-menu'>
      <Routes>
        <Route path='/projeto-1' element={<h4>Projeto 1</h4>} />
      </Routes>
    </div>
  )
}

export default LateralMenu