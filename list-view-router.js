const express = require('express');
const router = express.Router();

const tasks = [
  {
    id: "12",
    isCompleted: false,
    description: "Pasear al perro"
  },
  {
    id: "13",
    isCompleted: true,
    description: "Comprar víveres"
  }
];

// Ruta: tareas completas
router.get('/completed-tasks', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta: tareas incompletas
router.get('/incomplete-tasks', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = router;
