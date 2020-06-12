import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Card = styled.div`
    width: 100%;
    height: 100%;
    max-height: 120px;
    max-width: 740px;
    margin: 0 auto 35px;
    padding: 20px 30px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    box-sizing: border-box;
`

const Image = styled.div`
    position: relative;
    display: block;
    max-width: 70px;
    margin-right: 20px;
    width: 100%;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
    flex: 4;
`

const DetailsFooter = styled.p`
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    color: #434343;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
`

const Separator = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background: #000;
    display: inline-block;
    margin: 0 10px;
`

const Time = styled.a``

const Projects = styled.a``

const Date = styled.a``

const Title = styled.h2`
    text-align: left;
    letter-spacing: 0px;
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    display: block;
    color: #000;
    margin: 0;
`

export default () => (
    <StaticQuery
        query={graphql`
            query HeadingQuery {
                file(relativePath: { eq: "google.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 80, maxHeight: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
                <Card>
                    <Image>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </Image>
                    <Details>
                        <Title>Google Redesign</Title>
                        <DetailsFooter>
                            <Time>3 dias atrás</Time>
                            <Separator/>
                            <Date>6 dias atras</Date>
                            <Separator/>
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                </Card>
            </>
        )}
    />
)

