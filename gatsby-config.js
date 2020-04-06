module.exports = {
    plugins:[
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/images',
                name: 'images'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        { 
            resolve: 'gatsby-plugin-purgecss',
            options: {
                printRejected: true, // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        }
    ]
}