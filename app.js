const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/', (req, res) => {
    //res.json({message: 'No user in the system'})
    res.send('61160121 Sakarin Juajan')
})

app.listen(port, () => {
    console.log('The app is up and running!')
})
module.exports = app