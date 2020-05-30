import React from "react"
import { Link } from "gatsby"
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
    position: fixed;
    z-index: 999;
    top: 0;
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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: initial;
`;

const Menu = styled.div`
    width: 25px;
    height: 12px;
    display: block;
    background: transparent;
    position: relative;
    padding: 6px 0;

    &:before {
        content:"";
        width: 100%;
        height: 3px;
        background: #000;
        border-radius: 5px;
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        top: 4px;
    }

    &:after {
        content:"";
        width: 100%;
        height: 3px;
        background: #000;
        border-radius: 5px;
        position: absolute;
        display: block;
        bottom: 4px;
        right: 0;
        left: 0;
    }

    &:hover {
        cursor: pointer;
    }
`
const NavList = styled.ul`
    right: -20px;
    width: 240px;
    background: white;
    text-align: center;
    position: absolute;
    text-decoration: none;
    box-shadow: 0px 5px 15px #0000000D;
    padding: 20px 35px;
    box-sizing: border-box;
    border-radius: 12px;
    visibility: hidden;
    opacity: 0;
    transition: all 200ms ease-in-out;

    ${Menu}:hover & {
        visibility: visible;
        opacity: 1;
    }
`

const NavItemList = styled.li`
    display: block;
    text-decoration: none;
    text-align: center;
    margin: 2px 0;
`

const StyledNavLink = styled(Link)`
    display: block;
    padding: 5px 10px;
    text-decoration: none;
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
            <Menu>
                <NavList>
                    <NavItemList>
                        <StyledNavLink to="/">
                            Projetos
                        </StyledNavLink>
                    </NavItemList>
                    <NavItemList>
                        <StyledNavLink to="/">
                            Cursos
                        </StyledNavLink>
                    </NavItemList>
                    <NavItemList>
                        <StyledNavLink to="/">
                            Como Usar
                        </StyledNavLink>
                    </NavItemList>
                    <NavItemList>
                        <StyledNavLink to="/about">
                            Sobre
                        </StyledNavLink>
                    </NavItemList>
                </NavList>
            </Menu>
        </Container>
    </Nav>
  </>
)

export default Layout
