const express = require("express");
const bodyParser = require("body-parser");
// ADD EXTERNAL ROUTES HERE
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//ADD EXTERNAL MIDDLEWARE HERE
app.use(bodyParser.json());

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API Server is listening on port ${PORT}`);
});
