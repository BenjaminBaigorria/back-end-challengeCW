const server=require("./express/index")

var PORT = process.env.PORT || 3001

server.listen(PORT,console.log(`server listen on port ${PORT}`))

module.exports = server