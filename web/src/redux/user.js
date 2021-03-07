import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const register = createAsyncThunk(
    'user/register',
    async ({ name, email, password }, thunkAPI) => {
        const res = await axios.post('/api/users/register', {
            name,
            email,
            password,
        })
        return res.data.data
    }
)

// create session
export const login = createAsyncThunk(
    'user/login',
    async ({ email, password }, thunkAPI) => {
        // check if session is expired
        if (!email || !password) {
            const res = await axios.get('/api/users')
            return res.data.data
        }

        const res = await axios.post('/api/users/login', { email, password })
        return res.data.data
    }
)

// destroy session
export const logout = createAsyncThunk('user/logout', async () => {
    const res = await axios.get('/api/users/logout')
    return res.data.data
})

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            return action.payload
        },
        [login.fulfilled]: (state, action) => {
            return action.payload
        },
        [logout.fulfilled]: () => {
            return {}
        },
    },
})

export default userSlice.reducer
