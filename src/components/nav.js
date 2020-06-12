import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.div`
    width: 100%;
    height: 100%;
    max-height: 120px;
    display: flex;
    background: #E5E5E5;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: block;
    z-index: 999;
    top: 0;
`

const Container = styled.div`
    position: relative;
    margin: 3rem auto;
    width: 94%;
    max-width: 1145px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 45em) {
        width: 98%;
    }
`

const Title = styled.h1`
    text-align: center;
    display: block;
    padding: 0;
    margin: 0;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 900;
    font-size: 24px;
    color: initial;
    text-transform: unset;
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const NavItemList = styled.li`
    display: block;
    text-decoration: none;
    text-align: center;
    margin: 2px 0;
`

const StyledNavLink = styled(Link)`
    display: block;
    padding: 5px 20px;
    text-decoration: none;
    text-transform: unset;
    font-weight: 700;
    color: initial;
    box-sizing: border-box;
`

const Layout = () => (
  <>
    <Nav>
        <Container>
            <Title>
                <StyledLink to="/">
                    AppIdeas
                </StyledLink>
            </Title>
            <NavList>
                <NavItemList>
                    <StyledNavLink to="/">
                        projetos
                    </StyledNavLink>
                </NavItemList>
                <NavItemList>
                    <StyledNavLink to="/">
                        cursos
                    </StyledNavLink>
                </NavItemList>
                <NavItemList>
                    <StyledNavLink to="/about">
                        sobre
                    </StyledNavLink>
                </NavItemList>
            </NavList>
        </Container>
    </Nav>
  </>
)

export default Layout
