const express=require("express")
const server=express()
const route=require("./Routes/index")

//midleware
server.use(express.json())

//routes
server.use("/iecho",route)

module.exports=server
