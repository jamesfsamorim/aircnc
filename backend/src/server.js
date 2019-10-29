const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
const cors = require('cors')

const app = express()

mongoose.connect("mongodb+srv://omni:omniadmin@tindevcluster-mt9dj.mongodb.net/aircnc_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333)