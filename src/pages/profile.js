import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../layouts/layout"
import Card from "../components/card"
import Img from "gatsby-image"

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
`

const Image = styled.div`
    position: relative;
    display: block;
    max-width: 200px;
    margin-right: 20px;
    border-radius: 10px;
    overflow: hidden;
    flex: 1;
`

const Details = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
`

const TitleHeader =  styled.h2`
  padding: 0;
  margin: 0 0 10px;
  text-align: left;
  width: 100%;
`

const SocialList = styled.div`
  display: flex;
  margin-top: 20px;
`

const Description = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
`

const TitleDescrition = styled.h2`
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: column;
`

const DescriptionText = styled.div`
  width: 100%;
  margin: 0 auto 30px;
  padding: 20px 30px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 15px 35px #00000029;
  border-radius: 16px;
  box-sizing: border-box;
`

const Text = styled.p``

export default () => (
  <StaticQuery
      query={graphql`
          query ProfileImgQuery {
              file(relativePath: { eq: "rychillie.png" }) {
                  childImageSharp {
                      fluid(maxWidth: 200, maxHeight: 200) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      `}
      render={data => (
          <>
              <Layout>
                <Header>
                  <Image>
                      <Img fluid={data.file.childImageSharp.fluid} />
                  </Image>
                  <Details>
                    <TitleHeader>Rychillie Umpierre de Oliveira</TitleHeader>
                    <SocialList>
                      <a className={"profileSocial"} href="https://rychillie.net">Website</a>
                      <a className={"profileSocial"} href="https://rychillie.net">Twitter</a>
                      <a className={"profileSocial"} href="https://rychillie.net">Github</a>
                    </SocialList>
                  </Details>
                </Header>
                <Description>
                  <TitleDescrition>Descrição:</TitleDescrition>
                  <DescriptionText>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus sed quam efficitur auctor. Cras ac ligula sed lectus tincidunt semper. Nullam ut metus eget tortor pellentesque tincidunt in vel quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum magna justo, tincidunt aliquet dui dapibus vel. Donec tincidunt purus a dictum cursus. Cras dignissim quam dapibus ex cursus pharetra.
                    </Text>
                    <Text>
                      Morbi at risus tortor. Suspendisse aliquam vehicula hendrerit. Sed hendrerit est ac tortor auctor, a tempor metus rutrum. Nulla ligula nulla, convallis id metus eget, malesuada pellentesque dolor. Cras justo libero, auctor ut ante quis, bibendum pulvinar magna. Maecenas tempus aliquet tincidunt. Donec euismod metus eu diam laoreet, eget iaculis velit blandit. Etiam sed eleifend purus.
                    </Text>
                    <Text>
                      In eget massa quis quam egestas aliquet id sed nisl. Sed commodo finibus purus, eget posuere lorem varius ac. Aliquam nec ornare mauris, vitae iaculis mi. Aenean tempor ac metus sit amet rhoncus. Nulla ac purus non risus eleifend hendrerit at vitae sapien. Donec odio urna, tincidunt id viverra et, dignissim eu metus. Integer vestibulum, purus non aliquam ornare, tortor turpis blandit dolor, sit amet congue ante lorem at lorem. Nullam eget porttitor justo.
                    </Text>
                  </DescriptionText>
                </Description>

                <TitleDescrition>Publicações:</TitleDescrition>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </Layout>
          </>
      )}
  />
)
