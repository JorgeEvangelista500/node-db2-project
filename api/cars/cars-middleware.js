const Cars = require('./cars-model')


const checkCarId = async (req, res, next) => {
      const results = await Cars.getById(req.params.id)
      if(results == null) {
        res.status(404).json({message:`car with id ${req.params.id} is not found` })
      } else {
        next()
      } 
}

const checkCarPayload = (req, res, next) => {
    if(!req.body.vin){
      res.status(400).json( {message:`vin is missing`})

    } else if (!req.body.model){
      res.status(400).json({message: `model is missing`})

    } else if (!req.body.make){
        res.status(400).json({message: `make is missing`})

    } else if (!req.body.mileage){
      res.status(400).json({message: `mileage is missing`})
    } else {
      next()
    }
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = async (req, res, next) => {
    const allCars = await Cars.getAll()
    const checkVin = allCars.filter(cars => 
      cars.vin === req.body.vin
      )
       if (checkVin.length === 0){
         next()
       } else {
         res.status(400).json({message:`vin ${req.body.vin} already exists`})
       }
       
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}