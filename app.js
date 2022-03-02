const express = require('express')
const app = express();

app.get('/',(req,res) => {
    res.send("WORKING");
})
const port = process.env.process || 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})