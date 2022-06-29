import React from 'react'
import styled from 'styled-components'

const FooterPagina = styled.div`
 display: flex;
    height: 80px;
    border: 1px solid black;
    justify-content: space-between;
    position: fixed;
    bottom:0;
    width: 100%;
    
`

export default class Footer extends React.Component {
  render() {
    return (
      <FooterPagina>Footer</FooterPagina>
    )
  }
}
