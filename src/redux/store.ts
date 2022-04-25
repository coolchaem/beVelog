import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './reducers/HomeSlice';
import UserReducer from './reducers/UserSlice';
import WriteReducer from './reducers/WriteSlice';
import ThemeReducer from './reducers/ThemeSlice';

export const store = configureStore({
  reducer: {
    userState: UserReducer,
    homeState: HomeReducer,
    writeState: WriteReducer,
    themeState: ThemeReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
