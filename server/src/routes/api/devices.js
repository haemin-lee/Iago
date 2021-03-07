import express from 'express'
import Device from '@app/models/device'

let router = express.Router()

// Get list of devices
router.get('/', async (req, res) => {
    const devices = await Device.find({ user: req.user._id })
    res.json({
        status: 'success',
        data: devices,
    })
})

// Create a new device
router.post('/', async (req, res) => {
    const device = await new Device({
        user: req.user._id,
    }).save()

    res.json({
        status: 'success',
        data: device,
    })
})

// Get data from device
router.get('/:id', async (req, res) => {
    const device = await Device.findById(req.params.id)
    res.json({
        status: 'success',
        data: device,
    })
})

export default router
