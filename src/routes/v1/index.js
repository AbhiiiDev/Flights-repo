const express=require('express')

const router=express.Router();


const {InfoController}=require('../../controllers/index');
const AirplaneRoutes=require('./airplane-route');
const CityRoutes=require('./city-route');
const AirportRoutes=require('./airport-routes')

router.use('/airplane',AirplaneRoutes)
router.use('/city',CityRoutes);
router.use('/airport',AirportRoutes);

router.get('/info',InfoController.info);


module.exports=router;