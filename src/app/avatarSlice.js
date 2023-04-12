import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  images: []
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
      setImgArr(state, action) {
        state.images = state.images.concat(action.payload)
      }
    },
})

export const { setImgArr } = avatarSlice.actions
export default avatarSlice.reducer
