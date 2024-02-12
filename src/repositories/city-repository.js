const { City } =require('../models');

const CrudRepository=require('./crud-repository');


class cityRepository extends CrudRepository {
    constructor()
    {
        super(City);
    }
}
module.exports=cityRepository;