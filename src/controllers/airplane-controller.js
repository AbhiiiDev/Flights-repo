const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirplane(req,res)
{
    // console.log('inside airplane-controller')
    try {
        // console.log(req.body);
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse);
        // console.log(airplane)
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}

async function getAllAirplane(req,res) {
    try {
        const airplanes=await AirplaneService.getAllAirplanes();

        SuccessResponse.data=airplanes;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
 
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}

async function getAirplane(req,res)
{
    try {
        const airplane=await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
        // console.log(airplane)
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}


async function destroyAirplane(req, res) {
    try {
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateAirplane(req,res){
    try {
        const bodyReq=req.body;
        const bodyData={};
        if(bodyReq.modelNumber)
        {
            bodyData.modelNumber=bodyReq.modelNumber;
        }
        if(bodyReq.capacity)
        {
            bodyData.capacity=bodyReq.capacity;
        }
       const airplane = await AirplaneService.updateAirplane(req.params.id,bodyData);

       SuccessResponse.data=airplane;
       return res.status(StatusCodes.OK)
       .json(SuccessResponse);
        
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports={
    createAirplane,
    getAllAirplane, 
    getAirplane,
    destroyAirplane,
    updateAirplane
}