import { useState } from 'react'

import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast'

function Setup() {
    const [ssid, setSsid] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('ssid', ssid)
        data.append('password', password)
        try {
            const res = await axios({
                method: 'POST',
                url: 'http://192.168.4.1',
                data: data,
                timeout: 1000,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            toast.error(
                'Credentials are invalid or network is taking a while to respond'
            )
        } catch (e) {
            // TODO: check for network error
            toast.success('You can go back home now!')
        }
    }

    return (
        <div className="container">
            <Toaster />
            <h2>Set up a new device</h2>
            <p>
                1. Power your device on. On your computer's WiFi network, change
                the network to <code>TRASH-SETUP</code>.
            </p>
            <p>
                2. Submit the form below with the SSID and password that you
                want the device to connect to.
            </p>
            <p>3. Switch back to your WiFi network. Your device is setup!</p>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="SSID"
                            type="text"
                            name="ssid"
                            value={ssid}
                            className="form-control"
                            onChange={(e) => setSsid(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="form-control btn btn-primary"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Setup
