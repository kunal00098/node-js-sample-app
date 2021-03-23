var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 31000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello Node js application deployed successfully test')
}) 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
