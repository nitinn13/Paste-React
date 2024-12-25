import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast'

export const Pasteslice = createSlice({
  name: 'paste',
  initialState: {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : [],
  },
  reducers: {
    addToPastes: (state, action) => {
        const paste = action.payload
        state.pastes.push(paste)
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Paste Added")
    },
    updateToPastes: (state, action) => {
        const paste = action.payload
        const index = state.pastes.findIndex((item) => item._id === paste._id)
        state.pastes[index] = paste
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Paste Updated")

    },
    resetAllPastes: (state, action) => {
        state.pastes = []
        localStorage.removeItem("pastes")
    },
    removeFromPastes: (state, action) => {
        const paste = action.payload
        const index = state.pastes.findIndex((item) => item._id === paste._id)
        state.pastes.splice(index, 1)
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Paste Deleted")
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = Pasteslice.actions

export default Pasteslice.reducer