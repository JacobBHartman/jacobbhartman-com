const express = require("express")
const path = require("path")
const morgan = require("morgan")
// environmental variables
const PORT = 8080

const app = express()
//middleware
app.use('/files',express.static('public'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.get("/", (request, response) => {
    response.sendFile(path.resolve("./index.html"))
})

app.listen(PORT, () => {
    console.log(`The application successfully listened on the port ${PORT}`)
})
