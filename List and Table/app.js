const express = require('express')
const app = express()
const path = require('path')
const port = 5000

app.use(express.static('public'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')

app.get('/',(req,res) => {
    let list = require('./list')
    res.render('index',{list})
})

app.listen(port,() => console.log('Server started at port '+port+'...'))