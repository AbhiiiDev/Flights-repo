const {AirplaneService}=require('../services');
const {StatusCodes}=require('http-status-codes');

async function createAirplane(req,res)
{
    console.log('inside airplane-controller')
    try {
        console.log(req.body);
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity,
        });
        console.log(airplane)
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"successfully created the airplane",
            data:airplane,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"can't able to create aiplane",
            data:{},
            error:error
        })
    }
}

async function getAllAirplane(req,res) {
    try {
        const airplanes=await AirplaneService.getAirplane();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"All airplanes are there",
            data:airplanes,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"can't able to get aiplanes",
            data:{},
            error:error
        })
        
    }
}


module.exports={
    createAirplane,
    getAllAirplane
}