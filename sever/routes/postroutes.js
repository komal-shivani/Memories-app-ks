import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from '../contollers/postsControllers.js';

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id', likePost);
//patch is used to updae or exiting code

export default router;