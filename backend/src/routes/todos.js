const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', async (req, res) => {
  const todos = await database('todos').select('*');
  console.log(todos);
  res.json(todos);
});

router.post('/', async (req, res) => {
  const { text, done } = req.body;
  const [id] = await database('todos').insert({ text, done: done ?? false });
  res.json({ id, text, done: done ?? false });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { text, done } = req.body;
  await database('todos').where({ id }).update({ text, done });
  res.json({ id, text, done });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await database('todos').where({ id }).del();
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
