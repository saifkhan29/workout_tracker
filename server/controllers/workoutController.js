const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// Post a workout
const createWorkout = async (req,res) => {
    console.dir(req)
    const {title,reps,load} = req.body 
    
    //add to data base
    try{
        const workout = await Workout.create({ title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a workout 
const deleteWorkout = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }

    try{
        const workout = await Workout.findOneAndDelete({_id: id})
        res.status(200).json(workout)
    } catch (error) {
        console.log(error)
        return res.status(400).json({error: 'No such workout'})
    }

}

//update a workout
const updateWorkout = async(req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'no such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
  }