const mongoose = require( 'mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://bharat:bharat1@cluster0.ecxkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Mongo DB Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;