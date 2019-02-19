const mongoose = require("../../database");

const FeedbackSchema = new mongoose.Schema({
  to: {
    type: String,
    require: true
  },
  toEmail: {
    type: String
  },
  message: {
    type: String,
    require: true
  },
  from: {
    type: String,
    require: true
  },
  fromEmail: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
