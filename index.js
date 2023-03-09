const express = require('express');
const app = express();
const port = 5000;

const contentRouter = require('./src/routers/contents');

app.use(express.json());

app.use('/contents', contentRouter);

app.listen(port, () => console.log(`Backend listening on port ${port}!`));