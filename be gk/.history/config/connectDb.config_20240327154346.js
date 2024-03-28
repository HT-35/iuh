// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     // const uri =
//     //   "mongodb+srv://huytranitvn:huyA0123@cluster0.1awxhec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//     console.log("connect db successfull !!");

//     const api = `mongodb+srv://huytranitvn:huyA0123@cluster0.1awxhec.mongodb.net/product`;
//     const uri = "mongodb://localhost:27017/LTNC";
//     await mongoose.connect(api);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   connectDB,
// };


const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Username:Password@Database Name In Lowercase.osusz.mongodb.net/${Database Name}?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
