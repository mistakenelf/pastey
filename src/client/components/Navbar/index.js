import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  height: 67px;
  align-items: center;
  width: 100%;
`

const BrandText = styled.div`
  font-size: 2em;
  margin-left: auto;
  padding-right: 10px;
`

const Navbar = () => (
  <NavbarContainer className="bg-dark text-light">
    <BrandText>Pastey</BrandText>
  </NavbarContainer>
)

export default Navbar