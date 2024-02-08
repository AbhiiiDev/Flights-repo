const {LoggerConfig}=require('../config');

class CrudRepository { 
    constructor(model){
        this.model=model;
    }


    async create(data)
    {
        console.log(data)
        try {
            const response=await this.model.create(data);
            return response;
        } catch (error) {
            LoggerConfig.error('something wrong while creating model inside crud-repo');
            throw error;
        }
    }


    // async destroy(data)
    // {
    //     try {
    //         const response=await this.model.create(data);
    //         return response;
    //     } catch (error) {
    //         LoggerConfig.error('something wrong while creating model');
    //         throw error;
    //     }
    // }


    // async get(data)
    // {
    //     try {
    //         const response=await this.model.findByPk(data);
    //         return response;
    //     } catch (error) {
    //         LoggerConfig.error('something wrong while creating model');
    //         throw error;
    //     }
    // }

     async getAll(data)
     {
         try {
             const response=await this.model.findAll(data);
             return response;
         } catch (error) {
             LoggerConfig.error('something wrong while creating model');
             throw error;
         }
    }

}

module.exports=CrudRepository;