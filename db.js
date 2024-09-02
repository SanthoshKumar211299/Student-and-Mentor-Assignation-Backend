import mongoose from 'mongoose';
import dotenv from 'dotenv';

//dot env config
dotenv.config();

const mongoURL = process.env.MONGO_URL ;
const localURL = process.env.LOCAL_URL ;

export function dbConnect(){
    try{
        mongoose.connect(mongoURL);
        console.log('Mondodb Connected Successfully');

    }catch(err){
        console.log(`Error connecting to DataBase: ${err}`);
    }
}