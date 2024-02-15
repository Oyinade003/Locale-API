const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  metadata: {
    area: { type: Number },
    population: { type: Number },
    // Add other relevant information fields
  },
  states: [{ type: mongoose.Schema.Types.ObjectId, ref: 'State' }],
});

module.exports = mongoose.model('Region', RegionSchema);
