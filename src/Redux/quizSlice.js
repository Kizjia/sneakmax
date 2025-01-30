import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizAnswers: [],
    instaFormAnswers: [],
  },

  reducers: {
    saveAnswers: (state, action) => {
      state.quizAnswers.push({
        quizAnswers: action.payload,
      });
    },
    saveInstaFormAnswers: (state, action) => {
      state.instaFormAnswers.push({
        instaFormAnswers: action.payload,
      });
    },
  },
});

export const { saveAnswers, saveInstaFormAnswers } = quizSlice.actions;

export default quizSlice.reducer;
