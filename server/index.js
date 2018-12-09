const express = require('express')
const app = express()
const port = 8080

app.get('/client', (req, res) => res.send('test'))

app.listen(port, () => console.log(`listening on port ${port}`))