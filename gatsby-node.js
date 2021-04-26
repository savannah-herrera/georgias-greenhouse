const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
  query MyQuery {
    allContentfulPlants(sort: {fields: position, order: ASC},filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        image {
          file {
            url
          }
        }
        commonName
        sciName
        light
        category
        id
        priceDecimal
        sku
      }
    }
  }  
 `)
  const productTemplate = path.resolve(`src/templates/product-page.js`)
  queryResults.data.allContentfulPlants.nodes.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        plant: node,
      },
    })
  })
}