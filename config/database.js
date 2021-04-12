const mongoose = require('mongoose');

require('dotenv').config();

console.log(process.env.DB_URI);


const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};
