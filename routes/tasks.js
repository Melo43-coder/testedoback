const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Adicionar uma nova tarefa
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar tarefa' });
  }
});

// Obter todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter tarefas' });
  }
});

// Deletar uma tarefa
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa concluída' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao concluir tarefa' });
  }
});

module.exports = router;
