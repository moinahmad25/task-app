const { Schema, model } = require("mongoose");

const createSchema = new Schema({
    task: {
        type: String,
        required: true
    }
})

const CreateModel = new model('Create', createSchema)

module.exports = CreateModel