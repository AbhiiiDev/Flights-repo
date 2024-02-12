const express=require('express');
const { AirplaneController } = require('../../controllers');

const router=express.Router();

router.post('/',AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplane);
router.get('/:id',AirplaneController.getAirplane);
router.delete('/:id',AirplaneController.destroyAirplane);
module.exports=router;