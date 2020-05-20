const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
