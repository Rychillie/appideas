import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Card = styled.div`
    width: 100%;
    height: 100%;
    max-height: 120px;
    max-width: 595px;
    margin: 0 auto 30px;
    padding: 20px 30px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 15px 35px #00000029;
    border-radius: 16px;
    box-sizing: border-box;
`

const Image = styled.div`
    position: relative;
    display: block;
    max-width: 80px;
    margin-right: 20px;
    width: 100%;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    margin: 10px 0 0;
`

const Separator = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background: #434343;
    display: inline-block;
    margin: 0 10px;
`

const Time = styled.a``

const Projects = styled.a``

const Title = styled.h2`
    text-align: left;
    letter-spacing: 0px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    display: block;
    color: #000;
    padding: 0 0 10px;
    margin: 0;
`

const Link = styled.a`
    color: #2680EB;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-transform: uppercase;
    margin-left: 20px;
    text-align: center;
    display: block;
    flex: 1;
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
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
                            <Projects>6 projetos aplicados</Projects>
                        </DetailsFooter>
                    </Details>
                    <Link>Leia Mais</Link>
                </Card>
            </>
        )}
    />
)

