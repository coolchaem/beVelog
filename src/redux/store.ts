import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './reducers/HomeSlice';
import UserReducer from './reducers/UserSlice';

export const store = configureStore({
  reducer: {
    userState: UserReducer,
    homeState: HomeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
