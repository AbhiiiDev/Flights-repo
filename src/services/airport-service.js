const { StatusCodes } = require("http-status-codes");
const AppError=require('../utils/errors/app-error')
const { AirportRepository } = require("../repositories");
const { response } = require("express");

const airportRepo=new AirportRepository();


async function createAirport(data) {

  
    try {
      const airport = await airportRepo.create(data);

      return airport;
    } catch (error) {
      throw new AppError('Cannot create a new airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
  
  async function getAllAirports() {
    try {
      const airport = await airportRepo.getAll();
      return airport;
    } catch (error) {
  
      throw new AppError(
        "Cannot fetch data of all the airports",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function getAirport(id) {
    try {
      const airport = await airportRepo.get(id);
      return airport;
    } catch (error) {
      if (error.statusCode == StatusCodes.NOT_FOUND) {
        throw new AppError(
          "The airport you requested is not present",
          error.statusCode
        );
      }
      throw new AppError(
        "Cannot fetch data of  the airplanes",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async function destroyAirport(id)
  {
    try {
      const response=await airportRepo.destroy(id);
      return response;
    } catch (error) {
      if(error.statusCode== StatusCodes.NOT_FOUND)
      {
        throw new AppError(
          "the airport you requested to delete is not present",
          error.statusCode
        )
      }
    }
  }



  module.exports={
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport
  }