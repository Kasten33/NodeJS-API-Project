const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (Req, res) => {
  res.json("Awesome Name!");
};

const tooeleTech = (Req, res) => {
  res.json("Tooele Tech is Awesome!");
};

const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};
module.exports = { awesomeFunction, tooeleTech, getAllStudents };
