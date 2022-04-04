const mongoose = require('mongoose')

var lessonSchema = new mongoose.Schema(
    {
        name: String,
        id: Number,
    },
    { collection: "users" }
)
module.exports = mongoose.model('Lesson', lessonSchema)