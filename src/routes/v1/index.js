const express=require('express')

const router=express.Router();


const {InfoController}=require('../../controllers/index');
const AirplaneRoutes=require('./airplane-route');

router.use('/airplane',AirplaneRoutes)

router.get('/info',InfoController.info);


module.exports=router;