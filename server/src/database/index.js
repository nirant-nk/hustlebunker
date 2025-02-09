import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import asyncHandler from '../utils/asynchHandler.js';

/* CONNECT TO MONGODB */
const connectDB = asyncHandler(

        async() =>  {

            try{

                const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
                console.log(`\nMongoDB Connected{ \n\n     URL: ${process.env.MONGO_URI}/${DB_NAME} \n     HOST: ${connection.connection.host} \n\n}`)

            }catch(error){

                    (error) => {
                        console.log("\nDB CONNECTION FAILED ! ERROR: " + error.message);
                        process.exit(1);   
                    }

            }

        }

)

export default connectDB;