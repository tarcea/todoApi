const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.Promise = global.Promise;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema);
