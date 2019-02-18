const express = require("express");

const Feedback = require("../models/feedback");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    return res.send({ feedback });
  } catch (error) {
    return res.status("400").send({ error: "Error creating a new Feedback" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    return res.send({ feedback });
  } catch (error) {
    return res.status("400").send({ error: "Error to get feedbacks" });
  }
});

router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.send({ feedbacks });
  } catch (error) {
    return res.status("400").send({ error: "Error to get feedbacks" });
  }
});

module.exports = app => app.use("/api/feedbacks", router);
