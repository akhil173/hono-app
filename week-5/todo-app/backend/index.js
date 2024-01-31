const express = require("express");
const mongoose = require("mongoose");
const { createTodoSchema, updateTodoSchema } = require("./types");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/todos", (req, res) => {
  const createPayload = req.body;
  const parsedCreatePayload = createTodoSchema.safeParse(createPayload);
  if (!parsedCreatePayload.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const prasedUpdatePayload = updateTodoSchema.safeParse(updatePayload);
  if (!prasedUpdatePayload.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
