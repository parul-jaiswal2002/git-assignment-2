const Post = require('../models/postModel')
const mongoose = require('mongoose')

const getAllPosts = async (req,res) => {
     const allPosts = await Post.find({}).sort({createdAt : -1})
     res.status(200).json(allPosts)
}

const createPost = async (req,res) => {
    const {title, body, image} = req.body
    try{
        const newPost = await Post.create({title,body, image})
        res.status(200).json(newPost)
    }
    catch(error){
        res.status(400).json({error : error.message})
    }
}

const updatePost = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No Such Id"})
    }
    const updatedpost = await Post.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    if(!updatedpost){
        return res.status(404).json({error : "No such workout"})
    }
    res.status(200).json(updatedpost)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error : "No Such Id"
        })
    }
    const deleted  = await Post.findByIdAndDelete({_id : id})
    if(!deleted){
        return res.status(404).json({
            error : "No such workout"
        })
    }
    res.status(200).json(deleted)
}

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}