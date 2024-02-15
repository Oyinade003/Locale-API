const mongoose = require('mongoose');

const LGASchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  metadata: {
    // Add metadata fields specific to LGAs
  },
  state: { type: mongoose.Schema.Types.ObjectId, ref: 'State', required: true },
});

module.exports = mongoose.model('LGA', LGASchema);
