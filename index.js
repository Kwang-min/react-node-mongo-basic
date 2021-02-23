const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://min:abcd1234@react-node-mongo-basic.9mlea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => {console.log('mongoDB connected')})
.catch(err => console.log(err))



app.get('/', (req,res) => res.send("Hello word"))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
