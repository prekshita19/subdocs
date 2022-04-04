const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Lesson = require('./lessonSchema')
const Squad = require('./squadSchema')

app.use(express.json())
const dbname = 'subdocument'

const dbUrl = `mongodb+srv://karthik:karthik@bootorganized.mks9w.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(dbUrl)
    .then(() => console.log('Db connected'))
    .catch((err) => console.log(err))

// Lesson endpoints
app.listen(5000, () => console.log('Server Running'))
app.get('/api/lesson', async (req, res) => {

    try {
        const result = await Lesson.find()
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }

})

app.post('/api/lesson', async (req, res) => {

    try {
        const result = await Lesson.create(req.body)
        res.send('Data Inserted in Lesson')
    }
    catch (err) {
        console.log(err)
    }

})


app.get('/api/lesson/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Lesson.findOne({ id: ID })
        if (result) {
            res.json({
                message: "Result Found",
                result
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

app.put('/api/lesson/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Lesson.findOneAndUpdate({ id: ID, $set: { name: req.body.name } })
        if (result) {
            res.json({
                message: "Result Updated"
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

app.delete('/api/lesson/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Lesson.deleteOne({ id: ID })
        if (result) {
            res.json({
                message: "Result Deleted in Lesson"
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

// Squad endpoints

app.get('/api/squad', async (req, res) => {

    try {
        const result = await Squad.find()
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }

})

app.post('/api/squad', async (req, res) => {

    try {
        const result = await Squad.create(req.body)
        res.send('Data Inserted in Squad')
    }
    catch (err) {
        console.log(err)
    }

})

app.get('/api/squad/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Squad.findOne({ id: ID })
        if (result) {
            res.json({
                message: "Result Found",
                result
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

app.put('/api/squad/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Squad.findOneAndUpdate({ id: ID, $set: { name: req.body.name, cohort: req.body.cohort } })
        if (result) {
            res.json({
                message: "Result Updated"
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

app.delete('/api/squad/id', async (req, res) => {

    const ID = parseInt(req.params.id)
    try {
        const result = await Squad.deleteOne({ id: ID })
        if (result) {
            res.json({
                message: "Result Deleted in Squad"
            })
        }
        else {
            res.json({
                message: "Result not Found"
            })
        }
    }
    catch (err) {
        console.log(err)
    }

})

