import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchworkouts,
  createWorkout,
  updateWorkoutAPI,
  deleteWorkoutAPI,
  fetchSingleWokout,
} from "../store/api";

const UpdateWorkouts = (props) => {
  
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const currentState = workouts.filter((workout) => workout._id === props.id);
  const [title, setTitle] = useState(currentState[0].title);
  const [reps, setReps] = useState(currentState[0].reps);
  const [load, setLoad] = useState(currentState[0].load);

  function submitHandler(e) {
    e.preventDefault();
    const workout = {
      title,
      reps,
      load,
    };

    dispatch(updateWorkoutAPI(props.id,workout));
    setTitle("");
    setReps("");
    setLoad("");
  }



  return (
    <div>
      <form onSubmit={submitHandler}>
        <span>Title</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <span>Reps</span>
        <input
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          type="reps"
        />
        <span>Load</span>
        <input
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          type="load"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateWorkouts;
