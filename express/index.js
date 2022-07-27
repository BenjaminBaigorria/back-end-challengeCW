const express=require("express")
const server=express()
const route=require("./Routes/index")
const cors=require("cors")



//midleware
server.use(express.json())
server.use(cors())

//routes
server.use("/iecho",route)

module.exports=server
