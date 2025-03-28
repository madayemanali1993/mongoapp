
const connectDB = require('./db');

const express = require('express')
const app = express()

const dotenv=require('dotenv'); 
 //load env file
 dotenv.config(); //env loaded
const port = process.env.port;
const users= require('./routes/users')
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//body parser
app.use(express.json());
connectDB();
//call db file connection start;

//get
app.get('/',(req,res)=>{
    res.send('got get req1')
})
app.use('/api',users);
// app.post('/items',(req,res)=>{
//     res.send('post req')
// })

// app.put('/items/:id',(req,res)=>{
//     res.send('put req')
// })

// app.delete('/items/:id',(req,res)=>{
//     res.send('delete req')
// })


app.listen(port, () => {
  console.log(`manali Example app listening on port ${port}`)
})