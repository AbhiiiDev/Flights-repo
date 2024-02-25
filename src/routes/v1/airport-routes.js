const express=require('express');

const {AirportController}=require('../../controllers');



const router=express.Router();

router.post('/',AirportController.createAirport);
router.get('/',AirportController.getAllAirport);
router.get('/:id',AirportController.getAirport);
router.delete('/:id',AirportController.destroyAirport);

module.exports=router;


