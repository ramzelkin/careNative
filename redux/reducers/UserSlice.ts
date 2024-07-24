import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Samantha',
  lastName: 'Johnson',
  nickName: '@samanthajonson',
  userId: 1,
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = UserSlice.actions;
export default UserSlice.reducer;
