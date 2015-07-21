express = require 'express'
app = express()

server = app.listen process.env.PORT or 3333, ->
  host = server.address().address
  port = server.address().port

  console.log 'Example app listening at http://%s:%s', host, port

app.use express.static 'client/public'
