const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pphuphaas:ctw0DeNjrAf20RPf@cluster0.sxyujsp.mongodb.net/courses');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Courses', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}