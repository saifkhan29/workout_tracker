import {
  addWorkout,
  deleteWorkout,
  updateWorkout,
  setWorkout,
} from "./workoutSlice";

const API_BASE_URL = "/api/workouts";

//fetching data from db 
export const fetchworkouts = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('/api/workouts');
      const data = await response.json();
      console.log(data)
      dispatch(setWorkout(data));
    } catch (error) {
        console.error('Error fetching workouts:', error);
    }
  };
};

//creating a workout 
export const createWorkout = workout => async dispatch => {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workout),
      });
      const data = await response.json();
      dispatch(addWorkout(data));
    } catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  export const updateWorkoutAPI = (id, updatedworkout) => async dispatch => {
    try {
      await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedworkout),
      });
      dispatch(updateWorkout(updatedworkout));
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };
  
  export const deleteWorkoutAPI = id => async dispatch => {
    try {
      await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      dispatch(deleteWorkout(id));
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };
