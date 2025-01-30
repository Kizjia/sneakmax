import { configureStore } from '@reduxjs/toolkit';

import ordersReducer from './ordersSlice';
import quizReducer from './quizSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    quiz: quizReducer,
  },
});
