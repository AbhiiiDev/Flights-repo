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

async function getAllAirplanes()
{
    try{
const airplanes=await airplaneRepo.getAll();
return airplanes;
    }
    catch(error){
LoggerConfig.error(error);
throw error;

    }
}

async function getAirplane(id)
{
    try{
const airplane=await airplaneRepo.get(id)
return airplane;
    }
    catch(error)
    {
        throw error;

    }
}

module.exports={
    createAirplane,
    getAllAirplanes,
    getAirplane
}

