const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"users"   : ["John", "Mike"]})
})

app.listen(5000,()=> {
    console.log('server listening on port 5000');
})
