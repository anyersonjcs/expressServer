const express = require('express');
const app = express();
const port = 8800;

app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: "1",
      isCompleted: false,
      description: "Estudiar para la clase"
    },
    {
      id: "2",
      isCompleted: true,
      description: "Comprar libros"
    },
    {
      id: "3",
      isCompleted: false,
      description: "Hacer la tarea"
    },
  ];

  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
