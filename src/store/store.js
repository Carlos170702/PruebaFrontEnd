import { configureStore } from '@reduxjs/toolkit'
import { clientSlice } from './clientData/clientSlice'

export const store = configureStore({
  reducer: {
    clients: clientSlice.reducer
  },
})