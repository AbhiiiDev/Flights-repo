const { StatusCodes } = require("http-status-codes");
const AppError=require('../utils/errors/app-error')
const { FlightRepository } = require("../repositories");

const flightRepo=new FlightRepository();


async function createFlight(data)
{
    try {
        console.log(data);
        const flight=await flightRepo.create(data);
        return flight;

    } catch (error) {
        throw new AppError(error.message,
        StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports={
    createFlight
}