const express = require('express');
const { connectToMysql } = require('./configs/mysqldb');
const userRoutes = require('./routes/users');
const theaterRoutes = require('./routes/theaters');
const movieRoutes = require('./routes/movies');
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/theaters', theaterRoutes);
app.use('/api/theaters', movieRoutes);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.listen(3000, async () => {
  console.log("server is running on PORT - 3000")
  await connectToMysql()
})