const { StatusCodes } = require('http-status-codes');
const {LoggerConfig}=require('../config');
const AppError = require('../utils/errors/app-error');

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


    async destroy(data)
    {
        try {
            const response=await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!response){
                throw new AppError('Not able to find the resouse',StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            LoggerConfig.error('something wrong while creating model');
            throw error;
        }
    }


 async get(data)
    {
        try {
            const response=await this.model.findByPk(data);
            if(!response){
                throw new AppError('Not able to find the resouse',StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            LoggerConfig.error('something wrong while creating model');
            throw error;
        }
    }

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


    async update(id,data)
    {
        try {
            const response=await this.model.update(data,{
                where:{
                    id:id
                }
             
            })
            if(!response[0]){
                throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND);
            }
        } catch (error) {
            
        }
    }

}

module.exports=CrudRepository;