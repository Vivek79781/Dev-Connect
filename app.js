const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const app = express()

//Connect to database
connectDB()

const port = process.env.PORT || 3030

//Init Middleware
app.use(express.json({extended: false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API running")
})

app.use('/api/users', require('./routes/api/user.js'))
app.use('/api/auth', require('./routes/api/auth.js'))
app.use('/api/profile', require('./routes/api/profile.js'))
app.use('/api/posts', require('./routes/api/post.js'))


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})