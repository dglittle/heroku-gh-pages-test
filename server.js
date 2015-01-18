
var _ = require('gl519')

process.on('uncaughtException', function (err) {
    try {
        console.log(err)
        console.log(err.stack)
    } catch (e) {}
})

_.run(function () {

    if (!process.env.PORT) process.env.PORT = 5000
    if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production'

    var express = require('express')
    var app = express()

    app.get('/', function (req, res) {
        res.sendFile('index.html', { root : '.' })
    })

    app.listen(process.env.PORT, function() {
        console.log("go to http://localhost:" + process.env.PORT)
    })
})
