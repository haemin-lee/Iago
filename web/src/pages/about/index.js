import { useState } from 'react'

import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast'

function About() {
    return (
        <div className="container">
            <h2>Welcome to Iago!</h2>
            <h3>Iago is a software and hardware solution to help elderly patients with alzheimers and dementia.</h3>
        </div>
    )
}

export default About
