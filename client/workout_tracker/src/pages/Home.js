import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateWorkouts from "../components/UpdateWorkouts";
import {
  fetchworkouts,
  createWorkout,
  updateWorkoutAPI,
  deleteWorkoutAPI,
} from "../store/api";

const Home = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const [deleted, setDeleted] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [updateId, setUpdateID] = useState("")


  const toggleComponent = (id) => {
    setUpdateID(id)
    setIsToggled(!isToggled)
  }

 

  const deleteHandler = (id) => {
    dispatch(deleteWorkoutAPI(id))
      .then(() => {
        setDeleted(!deleted);
      })
      .catch((error) => {
        console.error("Error deleting workout:");
      });
  };

  useEffect(() => {
    dispatch(fetchworkouts());
  }, [dispatch, deleted]);


  return (
    <div>
      <h1>Workouts tracker.</h1>

      {workouts.map((item) => (
        <div className="workouts-container" key={item._id}>
          <h2>Title: {item.title}</h2>
          <h2>Reps: {item.reps}</h2>
          <h2>Load: {item.load}</h2>
          <div className="delete-btn-cont">
            <div
              onClick={() => deleteHandler(item._id)}
              className="btn btn-danger my-4"
            >
              Delete
            </div>
          </div>
          <div className="update-btn-cont">
            <div onClick={() => toggleComponent(item._id)} className="btn btn-warning my-2">
              Update
            </div>
          </div>
        </div>
      ))}

      {isToggled && <UpdateWorkouts id={updateId}/>}
    </div>
  );
};

export default Home;
