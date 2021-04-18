const express = require("express");
const routes = require('./routes/posts')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

require("dotenv").config();


const app = express();


const port = process.env.PORT || 5000;

// connect to the database
mongoose.connect(process.env.DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected succesfully') )
.catch(err => console.log(err) )

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Setup access to body parser
app.use(express.json());

// Setup morgan middleware
app.use(morgan('combined'))

// Use router middleware
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
