const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  lead_id: Number,
  total_value: Number,
  created_at: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Order', OrderSchema);
