const express = require ('express');
const ejs  = require ('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require ('./routers/userRouter')

const uri = require ('./config/dbConfig')


//port used 
const port = process.env.port || 3000



//set the express app
const app = express();

//set view engine and folder
app.set('view engine','ejs');


//use middleware and static files eg css/images
app.use(express.static('assets'));


app.use(express.urlencoded({extended:true}))




//mongo db connection to the application
mongoose.connect(uri)
.then((result)=>{
    app.listen(port,()=>{
        console.log(`server started at port ${port}`);
    })
})
.catch((err)=> console.log(err));

app.use('/users',userRouter)
