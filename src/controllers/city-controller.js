const {CityService}=require('../services');
const {StatusCodes}=require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createCity(req,res)
{
    // console.log('inside airplane-controller')
    try {
        // console.log(req.body);
        const city=await CityService.createCity({
        name:req.body.name
        });
        SuccessResponse.data=city;
        return res.status(StatusCodes.CREATED)
        .json(SuccessResponse);
     
    } catch (error) {
     ErrorResponse.error=error;
     return res.status(error.statusCode)
     .json(ErrorResponse);
    }
}


async function destroyCity(req, res) {
    try {
        const airplanes = await CityService.destroyCity(req.params.id);
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

async function updateCity(req,res)
{
    try {
        const bodyReq=req.body;
        const bodyData={};

        bodyData.name=bodyReq.name;
        const city=await CityService.updateCity(req.params.id,bodyData);
        SuccessResponse.data=city;
        return res.status(StatusCodes.OK)
        .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}



module.exports={
    createCity,
    destroyCity,
    updateCity
}