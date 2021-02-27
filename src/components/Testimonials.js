import React from 'react';
import styled from "styled-components";
import { useStaticQuery,graphql } from 'gatsby';
import Img from 'gatsby-image';
import { BsLightning } from 'react-icons/bs'; 
import { BsBookmarkCheck } from 'react-icons/bs';




const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile (
            filter: {
                ext: { regex: "/(jpg)|(png)|(jpeg)/" }
                name:{ in: ["testimonials-1", "testimonials-2"]}}) {
    edges {
      node {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
    `)
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                <Testimonial>
                <BsLightning css={`
                        color:#3fffa8;
                        font-size:2rem;
                        margin-top:1.5rem;
                        margin-bottom:1rem;
                        `} />
                    <h3>Sarah Connors</h3>
                    <p>"Experience beyond imagination.Thank you so much for your help and accesibility with day one to last day.</p>
                </Testimonial>
                <Testimonial>
                <BsBookmarkCheck css={`
                        color:#3fffa8;
                        font-size:2rem;
                        margin-bottom:1rem;
                        `} />
                    <h3>Sean Michaels</h3>
                    <p>"The greatest experience of my life!" It was so much fun exploring the mountains and cascades and they make it super easy to book my trip and accommodation.</p>
                </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) =>(
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>

    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width:100%;
  background:#fcfcfc;
  color:#000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height:100%;
`
const TopLine = styled.div`
  color:#077bf1;
  font-size:1rem;
  padding-left:2rem;
  margin-bottom:0.75rem;
`
const Description = styled.div`
text-align:start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight:bold;
`
const ContentWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
 display:grid;
 grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
 padding-top: 1rem;
 padding-right: 2rem;

 h3{
     margin-bottom: 1rem;
     font-size:1.5rem;
     font-size:italic;
 }

 p{
     color:#3b3b3b;
 }
`

const ColumnTwo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2em;
    grid-gap:10px;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius:10px;
    height:100%;
`
