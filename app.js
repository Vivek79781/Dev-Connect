const express = require("express")
const connectDB = require("./config/db")
const cors = require('cors')
const app = express()
const path = require('path')

//Connect to database
connectDB()

const port = process.env.PORT || 3030

//Init Middleware
app.use(express.json({extended: false}))
app.use(cors())


app.use('/api/users', require('./routes/api/user.js'))
app.use('/api/auth', require('./routes/api/auth.js'))
app.use('/api/profile', require('./routes/api/profile.js'))
app.use('/api/posts', require('./routes/api/post.js'))

// Serve Static Assets for production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'))
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})