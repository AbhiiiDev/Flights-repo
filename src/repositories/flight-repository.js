const db = require('../models');
const { Flight } =require('../models');
const {addRowLockOnFlights}=require('./queries')

const CrudRepository=require('./crud-repository');


class FlightRepository extends CrudRepository {
    constructor()
    {
        super(Flight);
    }

    async getAllFlights(filter,sort)

    {
        const response=await Flight.findAll({
            where:filter,
            order:sort,

        })

        return response;
    }

    async updateSeats(flightId,seats,dec=true)
    {
        const transaction=await db.sequelize.transaction();

      try {
       await db.sequelize.query(addRowLockOnFlights(flightId));
       const flight=await Flight.findByPk(flightId);
       if(+dec)
       {
        await flight.decrement('totalSeats',{by: seats},{
            transaction:transaction
        });
       }
       else 
       {
        await flight.increment('totalSeats',{by:seats},{transaction:transaction});
       }
      await transaction.commit();
      return flight;
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    }


}




module.exports=FlightRepository;