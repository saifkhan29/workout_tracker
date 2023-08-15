import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchworkouts, createWorkout, updateWorkoutAPI, deleteWorkoutAPI } from '../store/api'

const Home = () => {
    const dispatch = useDispatch();
    const workouts = useSelector(state => state.workouts)
    console.log(workouts)

    useEffect(() => {
        dispatch(fetchworkouts());
    }, [])  
    console.log(workouts)


  return (
    <div>
        <h1>Workouts tracker.</h1>

        {
          workouts.map((item) => (
            <div key={item._id}>
              <h2>Title: {item.title}</h2>
              <h2>Reps: {item.reps}</h2>
              <h2>Load: {item.load}</h2>   
            </div>

          ))
        }

    </div>
  )
}

export default Home