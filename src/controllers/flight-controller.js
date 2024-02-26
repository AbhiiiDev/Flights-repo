const {FlightService}=require('../services');
const {StatusCodes}=require('http-status-codes');

const {SuccessResponse,ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

async function createFlight(req,res)
{
    try {
        const flight=await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
        })
        SuccessResponse.data= flight;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


async function getAllFlights(req,res)
{
    try {
        const flights=await FlightService.getAllFlights(req.query);
        SuccessResponse.data=flights;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        const ErrorResponse = {
            error: {
                message: error.message || 'Internal Server Error', // Use a default message if error message is not available
                statusCode: error.statusCode || 500 // Use a default status code if statusCode is not available
            }
        };
    
        // Set the error object
        ErrorResponse.error = error;
    
        // Send the response with appropriate status code
        res.status(ErrorResponse.error.statusCode).json(ErrorResponse);
      
    }
}

module.exports={
    createFlight,
    getAllFlights
}