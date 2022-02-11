const express = require('express');
const { getAllSnacks, createNewSnack, getSnack, deleteSnack, updateSnack } = require('../queries/snacks');
const snacks = express.Router();



snacks.get('/', async (req, res) => {
    const snacks = await getAllSnacks();
    console.log(snacks)
    res.status(200).json(snacks)
});

snacks.get("/", async (req, res) => {
    const getAllSnacks = await getAllSnacks();
    if (getAllSnacks[0]) {
      res.status(200).json(getAllSnacks);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  snacks.post('/', async (request, response) => {
    const newSnacks = await createNewSnack(request.body);
    response.status(200).json(newSnacks);
})

snacks.get('/:index', async (request, response) => { 
  const {index} = request.params; 
  const snack = await getSnack(index);
  response.status(200).json(snack);
})
snacks.delete('/:id', async (request, response) => {
const {id} = request.params;
const snack = await deleteSnack(id);
response.status(200).json(snack);    
})


snacks.put("/:id", async (request, response) => {
  
  try {
    const updatedSnack = await updateSnack(request.params.id, request.body);
    response.status(200).json(updatedSnack);
  } catch (error) {
    console.log(error);
    response.status(404).json({ error: "Snack not found" });
  }
});


module.exports = snacks;