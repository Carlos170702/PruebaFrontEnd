import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    isSaving: false,
    CLients: [],
    active: null,
    message: null,
  },
  reducers: {
    setMessage: (state, { payload }) => {
      console.log(payload)
      state.message = payload;
      state.isSaving = false;
    },
    isSaving: (state) => {
      state.isSaving = true;
    },
    setClients: (state, { payload }) => {
      state.CLients = payload;
      state.isSaving = false;
    },
    setNewClient: (state, { payload }) => {
      state.CLients.unshift(payload.employe);
      state.message = payload;
      state.isSaving = false;
    },
    setActive: (state, { payload }) => {
      state.active = payload;
    },
  },
});

export const { isSaving, setClients, setActive, setNewClient, setMessage } =
  clientSlice.actions;
