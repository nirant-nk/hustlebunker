import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';
import { PORT } from './constants.js';
import connectDB from './database/index.js';
/* CONFIGURATIONS */
dotenv.config({
    path: './.env',
});

/* CONNECT TO DATABASE */
connectDB()
.then(
    ()=>{
        const server = http.createServer(app)
    
        server.on('error',(error) => {
            console.log(`\nState - launching app! Description - ${error}`);
        })
    
        server.on("connection", (socket) => {
            console.log(`\nNew Connection Established!`)
        })
    
        server.listen(PORT,()=>{
            console.log(`\nApp listening on port : ${PORT}`);
        })
    }
)
.catch(
    (error)=>{
        console.log(`App connection error! ${error}`);
    }
)

app.get('/',
    (req,res)=>  res.status(200).json(
        {
            'msg': "Welcome to ToDo HomePage!"
        }
    )
)

/* PAGE NOT FOUND */
app.use((req, res) => {
    res.status(404).json({'ERROR': 'Route Not Found'});
});
  
/* Error handling middleware (optional, for catching all errors) */
app.use((err, req, res, next) => {
    res.status(500).json({'ERROR': 'Internal Server Error - '+err.message});
});