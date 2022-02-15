const express = require("express");
const {
  getAllSnacks,
  createSnack,
  getSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");
const snacks = express.Router();

snacks.get("/", async (req, res) => {
  const snacks = await getAllSnacks();
  res.status(200).json({ success: true, payload: snacks });
});

snacks.get("/", async (req, res) => {
  const getAllSnacks = await getAllSnacks();
  if (getAllSnacks[0]) {
    res.status(200).json({ success: true, payload: getAllSnacks });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

snacks.post("/", async (request, response) => {
  console.log(request.body, "Post request");
  const newSnacks = await createSnack(request.body);
  if (newSnacks.id) {
    response.status(200).json({ success: true, payload: newSnacks });
  } else {
    response.status(400).json({ success: false, payload: newSnacks });
  }
});

snacks.get("/:index", async (request, response) => {
  const { index } = request.params;
  const snack = await getSnack(index);
  if (snack.id) {
    response.status(200).json({ success: true, payload: snack });
  } else {
    response.status(404).json({ success: false, payload: `/not found/` });
  }
});

snacks.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const snack = await deleteSnack(id);
  if (snack.id) {
    response.status(200).json({ success: true, payload: snack });
  } else {
    response.status(404).json({ success: false, payload: snack });
  }
});

snacks.put("/:id", async (request, response) => {
  try {
    const updatedSnack = await updateSnack(request.params.id, request.body);
    response.status(200).json({ success: true, payload: updatedSnack });
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: "Snack not found" });
  }
});

module.exports = snacks;
