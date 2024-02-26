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

async function getAllFlights(query)
{
 let customFilter={};
 if(query.trips)
 [departureAirportId,arrivalAirportId]=query.trips.split("-");

customFilter.departureAirportId=departureAirportId;
customFilter.arrivalAirportId=arrivalAirportId;

try {
    const flights=await flightRepo.getAllFlights(customFilter);
    return flights;
} catch (error) {
    throw new AppError('can not fetch flights you requested',StatusCodes.INTERNAL_SERVER_ERROR);
}
}

module.exports={
    createFlight,
    getAllFlights
}

