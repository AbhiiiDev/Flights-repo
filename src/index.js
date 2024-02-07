const express=require('express');
const { LoggerConfig } = require('./config');
const {ServerConfig}=require('./config')

const app=express();
const apiRoutes=require('./routes')


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
    console.log(` successfully started server on ${ServerConfig.PORT}`)
    LoggerConfig.info("successfully started the server")
})