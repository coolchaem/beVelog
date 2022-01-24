import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/UserSlice';
import WriteReducer from './reducers/WriteSlice';

export const store = configureStore({
  reducer: {
    userState: UserReducer,
    writeState: WriteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
