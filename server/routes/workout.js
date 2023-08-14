const express = require('express')
const router = express.Router()

const {
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout, 
    updateWorkout
  } = require('../controllers/workoutController')
  
//routes

//get all routes

router.get('/', getWorkouts)

//get a single workouts
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router