import express from 'express'
import devices from './devices'
import users from './users'

import Device from '@app/models/device'

import authenticate from '@app/libs/authentication-middleware'

let router = express.Router()

router.use('/users', users)

// Post data to device
router.post('/devices/:id', async (req, res) => {
    const device = await Device.findByIdAndUpdate(
        req.params.id,
        { $push: { data: req.body } },
        { new: true }
    )
    res.json({
        status: 'success',
        data: device,
    })
})

router.use(authenticate)
router.use('/devices', devices)

export default router
