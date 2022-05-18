const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require('./router/AuthRouter')

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//mongoose connection
const dburl = "mongodb+srv://shahkushal38:kushalgindra@clusterjwt.hl1la.mongodb.net/nodejs-jwt-auth?retryWrites=true&w=majority"
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
      app.listen(3000)
    console.log("MongoDB connected")})
  .catch((err) => console.log(err));


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)
// app.listen(process.env.PORT || 3000);
console.log("Server Started at port 3000");
