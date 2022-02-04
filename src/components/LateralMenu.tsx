import React from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

export const LateralMenu = () => {
  return (
    <StyledLateralMenu className='container-lateral-menu'>
      <Routes>
        <Route path='/projetos' element={
          <>
            <a href='/projetos/projeto-1'>Projeto 1</a>
            <hr />
            <a href='/projetos/projeto-2'>Projeto 2</a>
            <hr />
            <a href='/projetos/projeto-3'>Projeto 3</a>
            <hr />
            <a href='/projetos/projeto-4'>Projeto 4</a>
            <hr />
            <a href='/projetos/projeto-5'>Projeto 5</a>
            <hr />
            <a href='/projetos/projeto-6'>Projeto 6</a>
            <hr />
            <a href='/projetos/projeto-7'>Projeto 7</a>
          </>
        } />
      </Routes>
    </StyledLateralMenu>
  )
}

export default LateralMenu

const StyledLateralMenu = styled.div`

  a {
    padding: 20px;
    margin: 0;
    display: block;
    text-decoration: none;
    
    color: rgb(211, 211, 211) !important;

    &:hover {
      cursor: pointer;

      background-color: rgb(95, 95, 95);
    }
  }

  hr {
    padding: 0;
    margin: 0;

    color: rgb(194, 194, 194);
  }
`