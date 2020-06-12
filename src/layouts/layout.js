import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Nav from "../components/nav"

const GlobalStyle = createGlobalStyle`
  body, html {
    color: #000;
    font-family: 'Nunito', sans-serif;
    background: #E5E5E5;
    display: block;
    padding: 0;
    margin: 0;
  }

  a {
    color: initial;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    &.profileSocial {
      padding: 5px 15px;
      box-sizing: border-box;

      &:before {
        content: "";
        position: absolute;
        background: blue;
        display: block;
        opacity: .2;
        width: 70%;
        height: 25%;
        top: 60%;
        left: 48%;
        transform: translate(-52%, -40%);
        transition: all 300ms ease-in-out;
      }

      &:after {
        content:"|";
        position: absolute;
        display: block;
        left: 0;
        top: 50%;
        transform:translateY(-50%);
      }

      &:first-child {
        &:after {
          display: none;
        }
      }



      &:hover {
        &:before {
          height: 45%;
          top: 52%;
          left: 48%;
          transform: translate(-52%, -48%);
        }
      }
    }
  }
`

const Container = styled.div`
  position: relative;
  margin: 20px auto;
  width: 98%;
  max-width: 740px;
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
