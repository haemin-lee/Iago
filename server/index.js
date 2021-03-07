import express from 'express'
import session from 'express-session'
import passport from 'passport'
import redis from 'redis'
import redisStore from 'connect-redis'
import mongoose from 'mongoose'
import path from 'path'
import compression from 'compression'

import config from '@app/config'

import api from '@app/routes/api'

const PORT = config.PORT

// set up redis
const store = redisStore(session)
const client = redis.createClient()

// set up mongodb
mongoose.connect(config.db_connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: config.db_username,
    pass: config.db_password,
})

const app = express()

app.use(express.json())
app.use(
    session({
        store: new store({ client: client }),
        secret: config.secret,
        resave: false,
        saveUninitialized: true,
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(compression())

// Run all routes through /api to avoid React pathing conflicts
app.use('/api', api)

if (config.NODE_ENV === 'production') {
    // Serve React production bundle
    app.use(express.static(path.join(__dirname, 'build')))
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        console.log('request received')
        return res.json({ message: 'hello world!' })
    })
}

app.listen(PORT, () => {
    console.log(`Process is running on port ${PORT}`)
})
