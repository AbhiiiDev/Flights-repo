const { StatusCodes } = require("http-status-codes");
const AppError=require('../utils/errors/app-error')
const { FlightRepository } = require("../repositories");
const {Op}=require('sequelize')

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
 let sortFilter=[];

 const endingTripTime = " 23:59:00";
 if(query.trips)
{ [departureAirportId,arrivalAirportId]=query.trips.split("-");

customFilter.departureAirportId=departureAirportId;
customFilter.arrivalAirportId=arrivalAirportId;}

if(query.price)
{
    [minPrice,maxPrice]=query.price.split("-");
    customFilter.price={
        [Op.between]:[minPrice,((maxPrice == undefined) ? 20000: maxPrice)]
    };
}

if(query.tripDate)
{
    customFilter.departureTime={
        [Op.between]:[query.tripDate,query.tripDate + endingTripTime]
    }
}

if(query.sort)
{

    const params=query.sort.split(',');
    const sortFilters=params.map((param)=>
    param.split("_"));
console.log(sortFilters);

    sortFilter = [...sortFilters];
  
    console.log(sortFilter);

   
 
}

try {
    const flights=await flightRepo.getAllFlights(customFilter,sortFilter);
    return flights;
} catch (error) {
    throw new AppError('can not fetch flights you requested',StatusCodes.INTERNAL_SERVER_ERROR);
}
}



async function getFlight(id)
{
try {
    const flight=await flightRepo.get(id);
    return flight;
} catch (error) {
    if(error.StatusCode===StatusCodes.NOT_FOUND)
    {
        throw new AppError(
            "The flight you requested doesn't exist",
            error.StatusCode
        )
    }
}
}


module.exports={
    createFlight,
    getAllFlights,
    getFlight
}

