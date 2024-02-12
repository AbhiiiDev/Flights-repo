const { StatusCodes } = require("http-status-codes");
const AppError=require('../utils/errors/app-error')
const { CityRepository } = require("../repositories");


const cityRepo = new CityRepository(); //creating airplane repository

async function createCity(data) {
  console.log("inside city-service");

  try {
    const city = await cityRepo.create(data);
    // console.log(airplane)
    return city;
  } catch (error) {
    throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
    createCity
}