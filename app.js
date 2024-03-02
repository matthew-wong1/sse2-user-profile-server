require('dotenv').config()
const LoginRouter = require('./routers/login')
const express = require('express')
const app = express()
const cors = require('cors')
const SignUpRouter = require('./routers/signup')

//const mongoUrl = process.env.MONGO_URL
//mongoose.connect(mongoUrl)

// app.use(express.static('build'))
app.use(cors())
app.use(express.json());
app.use('/api/login',LoginRouter)
app.use('/',SignUpRouter)

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
