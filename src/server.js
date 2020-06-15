const mongoose = require('mongoose');
const mongoConfig = require('./config/mongodb');
const app = require('./app');

mongoose.connect(mongoConfig.host, mongoConfig.options, error => {
  if (error) throw error;
});

app.listen(3000, () => {
  console.log('🚀 API running on http://localhost:3000');
});
