// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Product',
        path: 'products/**/*.md',
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Product:[
      {
        path:"/products/:title",
        component:"./src/templates/Product.vue",
      }
    ],
    Tag:[
      {
        path:"/tags/:id",
        component:"./src/templates/Tag.vue",
      },
    ],
  }
}
