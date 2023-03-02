const Todos = require("../models/Todos.model");

module.exports.todosController = {
  addTodos: async (req, res) => {
    try {
      const data = await Todos.create({
        text: req.body.text,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getTodos: async (req, res) => {
    try {
      const data = await Todos.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteTodos: async (req, res) => {
    try {
      const data = await Todos.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error.massage);
    }
  },
  updateTodos: async (req, res) => {
    try {
      const data = await Todos.findByIdAndUpdate(req.params.id, {complated: !req.body.complated}, {new: true});
      console.log(data)
      res.json(data);
    } catch (error) {
      res.json({ error: error.massage });
    }
  },
};
