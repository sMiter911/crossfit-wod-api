const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
// ADD EXTERNAL ROUTES HERE
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

//ADD EXTERNAL MIDDLEWARE HERE
const cache = apicache.middleware;
app.use(bodyParser.json());

app.use(cache("1 minute"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API Server is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
