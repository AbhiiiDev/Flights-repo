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


async function destroyCity(data) {
  console.log("inside city-service");

  try {
    const city = await cityRepo.destroy(data);
    // console.log(airplane)
    return city;
  } catch (error) {
    throw new AppError('Cannot delete city object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateCity(id,data)
{
  try {
    const city=await cityRepo.update(id,data);
    return city;


  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested to update is not present', error.statusCode);
    }
    throw new AppError('Cannot update city object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
    createCity,
    destroyCity,
    updateCity
}