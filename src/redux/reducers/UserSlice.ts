import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import type { RootState } from '../store';

const initialState: User = {
  id: '',
  is_certified: false,
  username: '',
  email: '',
  profile: {
    id: '',
    display_name: '',
    short_bio: '',
    thumbnail: null,
    profile_links: {},
  },
  velogConfig: null,
};

export const UserSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
    loginFail: state => {
      state.is_certified = false;
    },
    logout: state => {
      state = initialState;
    },
  },
});

export const { loginSuccess, loginFail, logout } = UserSlice.actions;

export const userState = (state: RootState) => state.userState;

export default UserSlice.reducer;
