const {AirplaneRepository} =require('../repositories');

const airplaneRepo=new AirplaneRepository();  //creating airplane repository

async function createAirplane(data)
{
    console.log('inside airplane-service')
    console.log(data)
    try {
        const airplane =await airplaneRepo.create(data);
    } catch (error) {
        throw error;

    }
}

module.exports={
    createAirplane
}

