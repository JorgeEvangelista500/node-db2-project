const router = require('express').Router()

const { checkCarId, checkCarPayload , checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware')


const Cars = require('./cars-model')


router.get('/', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
})

router.get('/:id', checkCarId, (req, res) => {
    Cars.getById(req.params.id)
        .then(car => {
            res.status(200).json(car)
        })
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, (req, res) => {
    Cars.create(req.body)
        .then(newCar => {
            res.status(200).json(newCar)
        })
})

module.exports = router;