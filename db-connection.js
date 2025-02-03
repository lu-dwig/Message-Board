const mongoose = require("mongoose");

// Connect to MongoDB
// const uri = 'mongodb+srv://Schleswig:zHD7Drhxu3rAi48R@cluster0.u51m4.mongodb.net/messageboard?retryWrites=true&w=majority&appName=Cluster0'
//   mongoose.connect(uri, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
//   });
// const db =mongoose.connect(process.env.DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const uri =mongoose.connect( uri, process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
module.exports = uri;

// require('dotenv').config({ path: '.env' });
