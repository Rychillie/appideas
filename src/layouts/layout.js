import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Nav from "../components/nav"

const GlobalStyle = createGlobalStyle`
  body, html {
    color: #000;
    font-family: 'Nunito', sans-serif;
    background: #EDF1F6;
    display: block;
    padding: 0;
    margin: 0;
  }
`

const Container = styled.div`
  position: relative;
  margin: 3rem auto;
  width: 98%;
  max-width: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Layout({children}) {
  return (
    <>
      <React.Fragment>
        <GlobalStyle/>
      </React.Fragment>

      <Nav/>

      <Container>{children}</Container>
    </>
  )
}
