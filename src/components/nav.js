import React from "react"
import styled from "styled-components"

const Nav = styled.div`
    width: 100%;
    height: 100%;
    max-height: 90px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 15px 35px #0000000D;
`

const Container = styled.div`
    position: relative;
    margin: 3rem auto;
    width: 98%;
    max-width: 635px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1`
    text-align: center;
    display: block;
`

const Menu = styled.div`
    width: 25px;
    height: 25px;
    display: block;
    background: black;
`

const Layout = () => (
  <>
    <Nav>
        <Container>
            <Title>AppIdeas</Title>
            <Menu/>
        </Container>
    </Nav>
  </>
)

export default Layout
