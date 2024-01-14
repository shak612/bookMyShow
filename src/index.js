const express = require('express');
const { connectToMysql } = require('./configs/mysqldb');
const userRoutes = require('./routes/users');
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({message: 'Hello World!'});
});

app.listen(3000, async () => {
  console.log("server is running on PORT - 3000")
  await connectToMysql()
})