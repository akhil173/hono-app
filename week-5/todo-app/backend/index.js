const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { todo } = require("./db");
const { createTodoSchema, updateTodoSchema } = require("./types");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // because, if this is not used, a frontend can't silently hit a backend unless it's on localhost:3000 that is same port as backend

// app.use(cors({
//   origin: "http://localhost:5173"                   // allows silent requests only from front ewnd on this port
// }))

app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedCreatePayload = createTodoSchema.safeParse(createPayload);
  if (!parsedCreatePayload.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }
  await todo.create({
    title: req.body.title,
    description: req.body.description,
  });

  return res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todosArray = await todo.find({});
  return res.json({
    todos: todosArray.map((todo) => {
      return {
        id: todo._id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
      };
    }),
  });
});

app.delete("/todos", async (req, res) => {
  const deletePayload = req.body;
  const parsedDeletePayload = updateTodoSchema.safeParse(deletePayload);
  if (!parsedDeletePayload.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }

  await todo.deleteOne({
    _id: req.body.id,
  });
  return res.json({
    msg: "Deleted Todo",
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedUpdatePayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedUpdatePayload.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  return res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
