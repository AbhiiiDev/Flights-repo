const { StatusCodes } = require("http-status-codes");
const AppError=require('../utils/errors/app-error')
const { AirplaneRepository } = require("../repositories");


const airplaneRepo = new AirplaneRepository(); //creating airplane repository

async function createAirplane(data) {
  console.log("inside airplane-service");

  try {
    const airplane = await airplaneRepo.create(data);
    // console.log(airplane)
    return airplane;
  } catch (error) {
    throw new AppError('Cannot create a new Airplance object', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAllAirplanes() {
  try {
    const airplanes = await airplaneRepo.getAll();
    return airplanes;
  } catch (error) {

    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepo.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of  the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepo.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested to delete is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


async function updateAirplane(id,data){
try {
  const airplane=await airplaneRepo.update(id,data);
  return airplane;
} catch (error) {
  if(error.statusCode==StatusCodes.NOT_FOUND)
  {
    throw new AppError("the airplane you request to update is not present")
  }
  throw new AppError('cannot update airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
};
