const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://huytranitvn:huyA0123@cluster0.1awxhec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    console.log("connect db successfull !!");

    const api = `mongodb+srv://huytranitvn:huyA0123@cluster0.1awxhec.mongodb.net/`;

    await mongoose.connect(api);
  } catch (error) {
    console.log(error);
  }
};
