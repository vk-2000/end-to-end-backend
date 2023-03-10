const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const contentRouter = require('./src/routers/contents');
const authenticateUser = require('./src/middlewares/auth');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/contents', authenticateUser, contentRouter);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));