import { createSlice } from "@reduxjs/toolkit";


export const registerslice = createSlice({
    name: 'register',
    initialState: {
        value: 0,
        name: '',
        email: '',
        contact: '',
        id: ''
    },
    reducers:{
        register: (state, action)=>{
            action.payload = state.name
            console.log(action.payload)
        }
    }
})

export const {register} = registerslice.actions

export default registerslice.reducer