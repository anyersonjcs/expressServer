const express = require('express');
const app = express();
const port = 8800;

app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: "123456",
      isCompleted: false,
      description: "Walk the dog"
    },
    {
      id: "789012",
      isCompleted: true,
      description: "Buy groceries"
    }
  ];

  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
