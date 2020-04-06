import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Image = ({ data }) => {
    return (
        <div>
        <Header title={data.file.relativePath} />
        <Img fluid={data.file.childImageSharp.fluid} />
        <Footer />
        </div>
    )
}

export const pageQuery = graphql`
    query($id: String!){
        file(relativePath: { eq: $id }) {
            extension
            relativePath
            childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Image