const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@suzan.q8zfj.mongodb.net/suzan-mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB",err));
