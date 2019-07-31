const { importSchema } = require('graphql-import')
const { ApolloServer } = require('apollo-server')
const  resolvers  = require('../graphql/resolvers/index')

const server = new ApolloServer({
    typeDefs: importSchema('src/graphql/schema/index.graphql'),
    resolvers
})

const run = async () => {
 await server.listen().then(({ url }) =>{
        console.log(`running at ${url}`)
    })
}

module.exports = run()