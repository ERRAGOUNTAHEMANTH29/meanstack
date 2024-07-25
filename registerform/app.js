const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./Src/router/formrouter');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://hemantherragounta29:b22xPqjtHdwZQbfp@cluster0.im0zbw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
