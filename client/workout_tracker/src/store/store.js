// store.js
import { configureStore } from '@reduxjs/toolkit';
import workoutsReducer from './workoutSlice'; // Create this reducer

const store = configureStore({
  reducer: {
    workouts: workoutsReducer,
  },
});

export default store;
