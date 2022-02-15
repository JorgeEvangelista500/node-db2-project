const router = require('express').Router()

const { checkCarId } = require('./cars-middleware')


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

module.exports = router;