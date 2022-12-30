import  express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app=express();

app.use('/', routes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const URL="mongodb://localhost/Major-Project";
const PORT=8000;

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT} `);
}))
.catch((err)=>{
    console.log(err.message);

});


// mongoose.set('useFindAndModify',false);
