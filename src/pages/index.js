import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

import '../assets/style.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
    const images = useStaticQuery(graphql`
        query MyQuery {
            allFile {
                edges {
                    node {
                        childImageSharp {
                            id
                            fluid(maxHeight: 240, maxWidth: 480) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        relativePath
                    }
                }
            }
        }
    `)
    return(
        <div>
            <Header />
            <div className='grid max-w-4xl grid-cols-2 gap-4 mx-auto'>           
                {images.allFile.edges.map(image => {
                return (
                    <Link to={'/image/' + image.node.relativePath} className='shadow rounded'>
                        <Image className='rounded-t' fluid={image.node.childImageSharp.fluid} />
                        <p className='p-6'>{image.node.relativePath}</p>
                    </Link>
                )
            })}
            </div>
            <Footer />
        </div>
    )
}

export default Index