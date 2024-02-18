const express=require('express');
const { LoggerConfig } = require('./config');
const {ServerConfig}=require('./config')

const app=express();
const apiRoutes=require('./routes')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,async ()=>{
    console.log(` successfully started server on ${ServerConfig.PORT}`)
    LoggerConfig.info("successfully started the server")

    const {Airport,City} =require('./models');
   const city=await City.findByPk(3);
// console.log(city);

// const airport=await city.createAirport({name:'Safdarjung Airport, Satya Sadan',address:'Sri Aurobindo Marg, near Jorbagh, Satya Sadan, New Delhi, Delhi 110003', code:'VIDD'});

//     console.log(airport);

    const airport=await city.getAirports();
    console.log(airport)

})