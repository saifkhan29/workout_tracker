import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchworkouts, createWorkout, updateWorkoutAPI, deleteWorkoutAPI } from '../store/api'

const CreateWorkout = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')


    function submitHandler(e){
        e.preventDefault()
        const workout = {
            title,
            reps,
            load
        }

        dispatch(createWorkout(workout))
        setTitle("")
        setReps("")
        setLoad("")
        
    }
     
  return (
    <div className='my-5' >
        <form onSubmit={submitHandler}>
            <span>Title</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <span>Reps</span>
            <input value={reps} onChange={(e) => setReps(e.target.value)} type="reps" />
            <span>Load</span>
            <input value={load} onChange={(e) => setLoad(e.target.value)} type="load" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateWorkout