const createCategoryPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            description
            image {
              asset {
                fluid(maxWidth: 600, maxHeight: 600) {
                  src
                }
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const categories = result.data.allSanityCategory.edges || [];
  categories.forEach((edge, index) => {
    const path = `/shop/category/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/category.js'),
      context: { slug: edge.node.slug.current },
    });
  });
};

const createProductPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            _id
            title
            category {
              slug {
                current
              }
            }
            description {
              children {
                text
              }
            }
            slug {
              current
            }
            variants {
              name
              price
            }
            media {
              asset {
                url
              }
            }
            ingredients
            includedItems {
              details
              image {
                asset {
                  url
                }
              }
            }
            careInstructions
            allergens
          }
        }
      }
    }
  `);

  const products = result.data.allSanityProduct.edges || [];
  products.forEach((edge) => {
    const path = `/shop/category/${edge.node.category.slug.current}/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/product.js'),
      context: { slug: edge.node.slug.current },
    });
  });
};

const createLegalPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityLegal {
        edges {
          node {
            _id
            pageName
            documentTitle
            slug {
              current
            }
            content {
              _rawChildren
            }
          }
        }
      }
    }
  `);

  const legals = result.data.allSanityLegal.edges || [];
  legals.forEach((edge) => {
    const path = `/legal/${edge.node.slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/legal.js'),
      context: { slug: edge.node.slug.current },
    });
  });
};

exports.createPages = async (params) => {
  await Promise.all([
    createCategoryPages(params),
    createProductPages(params),
    createLegalPages(params),
  ]);
};
