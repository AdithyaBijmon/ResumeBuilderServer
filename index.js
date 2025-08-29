//import json server
const JSONServer  = require('json-server')


//create server for running json file
const rBuilderServer = JSONServer.create()


//import 'db.json'
const router = JSONServer.router("db.json")

const middleware = JSONServer.defaults()

const PORT = 3000

rBuilderServer.use(middleware)

rBuilderServer.use(router)

rBuilderServer.listen(PORT,()=>{
    console.log(`rBuilderServer started at :${PORT} and waiting for client request!!!`)
})