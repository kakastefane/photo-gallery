const path = require('path')

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    
    const images = await graphql(`
        query MyQuery {
            allFile {
                edges {
                    node {
                        relativePath
                    }
                }
            }
        }
    `)

    const template = path.resolve('src/templates/image.js')
    images.data.allFile.edges.forEach(edge => {
        createPage({
            path: '/image/'+edge.node.relativePath,
            component: template,
            context: {
                id: edge.node.relativePath
            }
        })
    });
}