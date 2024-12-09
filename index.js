// import jsonserver
const jsonsever=require('json-server')
// create server
const meServer = jsonsever.create()
// create middleware to convert the json format
const middleware=jsonsever.defaults()
// import db.json file
const router = jsonsever.router("db.json")
// set port the server
const PORT=4000 || process.env.PORT
// server user midleware
meServer.use(middleware)
meServer.use(router)

// listen

meServer.listen(PORT,()=>{
  console.log(`server running successfully at port number ${PORT}`);
})