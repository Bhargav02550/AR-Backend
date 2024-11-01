const express = require("express");
const Router = express.Router();

const multer = require("multer"); //multer
// const upload = multer({ dest: 'uploads/course_icons' });
// const userUpload = multer({dest:'uploads/user_icons'})

const UserController = require("../controllers/UserController");

// Router.post('/register',userUpload.any(), UserController.Register);
Router.get("/users-list", UserController.getUsers);
Router.post("/add-user", UserController.postUsers);
Router.get("/get_all_users", UserController.getAllUsers);
// Router.post('/login', UserController.loginUser);
// Router.post('/add-course', upload.any(), CourseController.AddCourse);

module.exports = Router;
