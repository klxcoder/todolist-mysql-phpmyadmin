const express = require('express');

const getRouter = (database) => {

  const router = express.Router();
  router.get('/', async (req, res) => {
    const todos = await database('todos').select('*');
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
  return router;
}

module.exports = getRouter;
