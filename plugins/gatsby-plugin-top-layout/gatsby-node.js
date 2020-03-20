/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const express= require('express');

// https://github.com/gatsbyjs/gatsby/issues/17761
exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}
