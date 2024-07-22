const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasks = require('./routes/tasks');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/task-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/tasks', tasks);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
