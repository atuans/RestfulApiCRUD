import express from 'express';

import bodyParser from 'body-parser'; // allow us to take i incoming post request 
import userRouters from './routes/users.js'

const app = express();
const PORT = 5000;

app.get('/', (req,res)=>{
    console.log('First Route');

    res.send("Hello World from main")
})

// initialize bodyparser middleware
app.use(bodyParser.json()); // this declare we will use json data in whole application

app.use('/users',userRouters);

app.listen(PORT, ()=> console.log(`Server is running on port http://localhost/${PORT}`))
