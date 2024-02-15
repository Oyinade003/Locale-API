const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  metadata: {
    // Add metadata fields specific to states
  },
  region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true },
  lgas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LGA' }],
});

module.exports = mongoose.model('State', StateSchema);
