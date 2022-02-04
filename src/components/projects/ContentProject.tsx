import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EvenOrOdd } from './EvenOrOdd'

const ContentProject = () => {
  return (
    <Routes>
      <Route path='/projeto-1' element={<EvenOrOdd />} />
    </Routes>
  )
}

export default ContentProject