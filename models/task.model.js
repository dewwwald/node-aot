const mongoose = require('mongoose');
const path = require('path');
const Schema = mongoose.Schema;
const actionError = require(path.resolve(`${__dirname}/action-error.model`)).actionError;
const PRIORITY = require(path.resolve(`${__dirname}/../enums/priority.enum`)).PRIORITY;

const actionSchema = new Schema({
  appId: Schema.Types.ObjectId,
  date: Date,
  deadline: Date,
  action: String,
  actionState: Schema.Types.Mixed,
  priority: {
    type: String,
    enum: PRIORITY
  },
  errorList: [ actionError ]
});

const Action = mongoose.model('Action', actionSchema);
