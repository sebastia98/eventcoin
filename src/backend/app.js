var database = require('./database');

var express = require('express')
var app = express();

app.post('/insertuser', async function (req, res) {

    const users = database.collection("users");

    const result = await users.insertOne(req.body);

    res.send(result)
})

  app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:${8080}`)
  })

  