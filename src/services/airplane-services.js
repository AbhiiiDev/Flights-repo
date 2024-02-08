const { LoggerConfig } = require('../config');
const {AirplaneRepository} =require('../repositories');

const airplaneRepo=new AirplaneRepository();  //creating airplane repository

async function createAirplane(data)
{
    console.log('inside airplane-service')
   
    try {
        const airplane =await airplaneRepo.create(data);
        // console.log(airplane)
        return airplane;
    } catch (error) {
        throw error;

    }
}


async function getAirplane()
{
    try{
const airplane=await airplaneRepo.getAll();
return airplane;
    }
    catch(error){
LoggerConfig.error(error);
throw error;

    }
}

module.exports={
    createAirplane,
    getAirplane
}

