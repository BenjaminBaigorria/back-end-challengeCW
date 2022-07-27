const server=require("./express/index")

var PORT = process.env.PORT || 3000

server.listen(PORT,console.log(`server listen on port ${PORT}`))

module.exports = server