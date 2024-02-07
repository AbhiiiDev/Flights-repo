const { Airplane } =require('../models');

const CrudRepository=require('./crud-repository');


class AirplaneRepo extends CrudRepository {
    constructor()
    {

        super(Airplane);
    }
}
module.exports=AirplaneRepo;