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
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("students")
      .findOne({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .insertOne(student);
    if (response.acknowledged) {
      res.status(200).json({ message: "Student created successfully" });
    } else {
      res
        .status(500)
        .json(
          response.error || "Error connecting to db while creating student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  awesomeFunction,
  tooeleTech,
  getAllStudents,
  getSingleStudent,
  createStudent,
};
