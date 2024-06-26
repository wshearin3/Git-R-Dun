const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Done"],
    default: "Not Started",
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    deafault: Date.now,
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
