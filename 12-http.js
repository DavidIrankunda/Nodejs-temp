
const http = require('http')


const server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.end('welcome to the home page')
    }
    if (req.url ==='/about') {
        res.end('here is short history')
    }
    res.end(
`        <h1>Oops!</h1>
        <p>We can't seem to find the page </p>
        <a href="/">back</a>
`    )

    })

server.listen(5000)