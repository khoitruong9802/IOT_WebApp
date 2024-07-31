import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    id: "",
    fullname: "",
    username: "",
    accessToken: "",
    refreshToken: "",
  },
  reducers: {
    updateCustomer: (state, action) => {
      const {
        id = "",
        fullname = "",
        username = "",
        accessToken = "",
        refreshToken = "",
      } = action.payload;

      state.id = id ? id : state.id;
      state.fullname = fullname ? fullname : state.fullname;
      state.username = username ? username : state.username;
      state.accessToken = accessToken ? accessToken : state.accessToken;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
    },
    resetCustomer: (state) => {
      state.id = "";
      state.fullname = "";
      state.username = "";
      state.accessToken = "";
      state.refreshToken = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCustomer, resetCustomer } = counterSlice.actions

export default counterSlice.reducer