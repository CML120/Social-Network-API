// Import dependencies from Mongoose
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string. Use the provided environment variable MONGODB_URI if available,
// otherwise use the default local connection string 'mongodb://127.0.0.1:27017/social_network_db'.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_network_db';

// Connect to MongoDB
connect(connectionString);

// Export the MongoDB connection object
module.exports = connection; 
