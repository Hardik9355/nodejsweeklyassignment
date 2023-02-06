require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routers/userrouters");
const loginRoutes = require("./routers/loginrouters");
const updaterouter = require("./routers/updaterouter");
const createpost = require("./routers/createpost");
const updatepost = require("./routers/updatepost");
const deletepost = require("./routers/delete");
const getpost = require("./routers/getpostrouter")
const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/user", userRoutes);
app.use("/login",loginRoutes);
app.use("/update" ,  updaterouter);
app.use("/create" ,createpost);
app.use("/updatepost",updatepost);
app.use("/deletepost", deletepost);
app.use("/getpost" , getpost);
const PORT = process.env.PORT || 8081;
app.use((req,res) => res.send("routers not found"));

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});