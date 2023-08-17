import { createSlice } from '@reduxjs/toolkit'

const workoutSlice = createSlice({
    name: 'workouts',
    initialState: [],
    reducers: {
        addWorkout: (state,action) => {
            state.unshift(action.payload)
        },
        updateWorkout: (state,action) => {
            const { id, title, reps, load } = action.payload
            const workout = state.find(workout => workout.id === id)
            if(workout){
                workout.title = title
                workout.reps = reps
                workout.load = load
            }
        },
        deleteWorkout: (state, action) => {
            return  state.filter(todo => todo.id !== action.payload)
        },
        setWorkout: (state,action) => {
            return action.payload
        }
    }
})
console.log(workoutSlice)
export const { addWorkout, updateWorkout, deleteWorkout, setWorkout, singleWorkout } = workoutSlice.actions

export default workoutSlice.reducer