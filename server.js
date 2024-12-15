const express = require("express")
const PORT = 3000;
const server = express()

server.use(express.static("public"))


server.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})