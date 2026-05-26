const mongoose = require("mongoose");

const uri =
  "mongodb+srv://hemathiyyagura123_db_user:Hema123@cluster0.wbyhgrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error");
    console.error(err);
    process.exit(1);
  });