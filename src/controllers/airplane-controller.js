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
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"successfully crated the airplane",
            data:airplane,
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.BAD_GATEWAY).json({
            success:false,
            message:"can't able to create aiplane",
            data:{},
            error:error
        })
    }
}

module.exports={
    createAirplane
}