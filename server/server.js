const express = require('express')
const app = express()
const workoutRoutes = require('./routes/workout')


//middle ware
app.use(express.json())
app.use((req,res,next) => {
    next()
})

app.use('/api/workouts', workoutRoutes)


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/workout_2');
  console.log("Mongo is up and running")
  app.listen(4000, () => {
      console.log("Listening on port 4000")
  })

 }