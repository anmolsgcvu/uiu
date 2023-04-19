import * as index  from "./backend/index";
import * as user  from "./backend/modls/User";

const mongoose = require('mongoose')
const mongoURL = "mongodb://localhost:27017/mm.mm"
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connect");
    })
}

module.exports = connectToMongo;