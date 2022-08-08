const express =require('express')
const { adminRoute } = require('./routes/admin/adminRoute')
const { classesRoute } = require('./routes/classes/classes')
const { gamesRoute } = require('./routes/games/gamesRoute')
const { staffRoute } = require('./routes/staffDetails/staffDetails')
const app=express()
require('dotenv').config()
app.use('/admin',adminRoute)
app.use('/staff',staffRoute)
app.use('/classes',classesRoute)
app.use('/games',gamesRoute)

port=process.env.PORT
app.listen(1999)
