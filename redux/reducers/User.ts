import {createSlice} from '@reduxjs/toolkit';

export interface User {
  firstName: string;
  lastName: string;
  nickName: string;
  userId: 1;
}

const initialState = {
  firstName: 'Samantha',
  lastName: 'Johnson',
  nickName: '@samanthajonson',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;
