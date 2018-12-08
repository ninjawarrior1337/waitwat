const io = require('socket.io')()
const Engine= require('tingodb')()

let db = new Engine.Db("rooms.db", {})

io.on("connection", socket => {
    
})