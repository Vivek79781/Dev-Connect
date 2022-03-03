const express = require('express')
const connectDB = require('./config/db')

const app = express();

connectDB();

app.get('/',(req,res) => {
    res.send("WORKING");
})


// Routes
app.use('/api/users',require('./routes/api/user'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/posts',require('./routes/api/post'))


const port = process.env.process || 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})