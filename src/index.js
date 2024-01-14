const express = require('express');
const { sequalize, connectToMysql } = require('./configs/mysqldb');
const router = require('./routes/product');
const app = express();

app.use(express.json());
app.use('/api', router);

app.get('/', (request, response) => {
  response.status(200).json({message: 'Hello World!'});
});

app.listen(3000, async () => {
  console.log("server is running on PORT - 3000")
  await connectToMysql()
})