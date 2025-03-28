const express = require("express")
const routes=express.Router()
const user = require('../models/userModel')

//CRUD OPERATIONS
routes
  .get('/users',async (req,res)=>{
    try{
  const users= await user.find();
  res.status(200).json(users);
        // res.send('got get req1')
    }
    catch(e)
    {
        res.status(500)
        .json({
          success: false,
          message: "Internal server error",
          error: error.message
        })
    }
    //post
  })
  routes
  .post('/users',async (req,res)=>{
    try{
    
  const {name}=req.body;
  const newUser=new user({name});
  console.log(`${newUser}`)
  await newUser.save();
        // res.send('got get req1')
        res.status(200)
          .json({
            success: true,
            message: "post call done",
          })

    }
    catch(e)
    {
        res.status(500)
        .json({
          success: false,
          message: "Internal server error",
          error: error.message
        })
    }
})

//update
routes
.put('/users/:id',async (req,res)=>{
  try{
  const {id} =req.params;
const {name} =req.body
const updatedUser=await user.findByIdAndUpdate(id,{name});
if(!updatedUser)
{
res.json({message:"user not provided"});
}
      res.status(200)
        .json({
          success: true,
          user: updatedUser,
        })

  }
  catch(e)
  {
      res.status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: e.message
      })
  }
})
//delete

routes
.delete('/users/:id',async (req,res)=>{
  try{
  const {id} =req.params;
//const {name} =req.body
const deleteUser=await user.findByIdAndDelete(id);
if(!deleteUser)
{
res.json({message:"user not provided"});
}
      res.status(200)
        .json({
          success: true,
          user: deleteUser,
        })

  }
  catch(e)
  {
      res.status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: e.message
      })
  }
})
module.exports = routes