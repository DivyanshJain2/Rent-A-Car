const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/user/userRoute");
const carRoutes = require("./route/user/car");
const bookRoutes = require("./route/user/book");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const cors = require("cors");

dotenv.config();

const app = express();

// Connect Database
dbConnect();
const path = require("path");
// Middleware
app.use(express.json());

// Cors
app.use(cors());

// User Route
app.use('/api/users', userRoutes);
app.use('/api/car', carRoutes);
app.use('/api/book', bookRoutes);

const static_path=path.join(__dirname,"public");
app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("login");
  });

  app.get("/login.html",(req,res)=>{
    res.render("login");
  });  

app.get("/AboutUs.html",(req,res)=>{
    res.render("AboutUs");
  });

app.get("/Booking.html",(req,res)=>{
    res.render("Booking");
  });

app.get("/cars.html",(req,res)=>{
    res.render("cars");
  });

  app.get("/contact.html",(req,res)=>{
    res.render("contact");
  });

  app.get("/Home.html",(req,res)=>{
    res.render("Home");
  });

  app.get("/Navbar.html",(req,res)=>{
    res.render("Navbar");
  });

  app.get("/Sedan.html",(req,res)=>{
    res.render("Sedan");
  });

  app.get("/services.html",(req,res)=>{
    res.render("services");
  });

  app.get("/Signup.html",(req,res)=>{
    res.render("Signup");
  });

  app.get("/SUV.html",(req,res)=>{
    res.render("SUV");
  });









// Dynamic PORT - Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`));