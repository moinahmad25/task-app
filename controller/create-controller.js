const CreateModel = require("../model/create-model");


const createController = async (req, res) => {
    const {task} = req.body;
  try {
    if(task){
       await CreateModel.create({task})
    }
    return res.status(201).json({status: 'created', message: 'task created!!!', task});
  } catch (error) {
    return res.status(401).json("Not working!!!");
  }
};

module.exports = {createController}