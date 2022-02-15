const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return snack;
  } catch (error) {
    return error;
  }
};

const capitalize = (words) => {
  words = words.split(" ");
  let result = [];
  if (words.length > 1) {
    words.forEach((word) => {
      let letter = word.length > 2 ? word[0].toUpperCase() : word[0];
      result.push(letter + word.slice(1).toLowerCase());
    });
  } else {
    const letter =
      words[0].length > 2 ? words[0][0].toUpperCase() : words[0][0];
    result.push(letter + words[0].slice(1).toLowerCase());
  }
  return result.join(" ");
};

const createSnack = async (snack) => {
  try {
    let { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    name = capitalize(name);
    if (!image) {
      image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
      [name, fiber, protein, added_sugar, is_healthy, image]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snack) => {
  try {
    console.log(snack);
    const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6, image=$7 WHERE id=$1 RETURNING *",
      [id, name, fiber, protein, added_sugar, is_healthy, image]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
