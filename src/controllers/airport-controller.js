const {AirportService} =require('../services');
const {StatusCodes}=require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createAirport(req,res)
{

    try {
   
        const airport=await AirportService.createAirport({
          name:req.body.name,
          code:req.body.code,
          address:req.body.address,
          cityId:req.body.cityId,
        });
        SuccessResponse.data=airport;
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse);
      
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}



async function getAllAirport(req,res) {
    try {
        const airport=await AirportService.getAllAirports();

        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
 
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}

async function getAirport(req,res)
{
    try {
        const airport=await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}


async function destroyAirport(req,res)
{
    try {
        const airport=await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode)
        .json(ErrorResponse);
    }
}

module.exports={
    createAirport,
    getAllAirport,
    getAirport,
    destroyAirport

}