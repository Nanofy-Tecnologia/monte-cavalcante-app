import postController from '@/controllers/postController'
import validateTokenMiddleware from '@/middleware/validateTokenMiddleware'
import { Router } from 'express'

const postRouter = Router()

postRouter
  .get('/published', postController.getPublishedPosts)
  .get('/:postId', validateTokenMiddleware, postController.getPost)
  .get('/', validateTokenMiddleware, postController.getAllPosts)
  .post('/', validateTokenMiddleware, postController.createPost)
  .put('/:postId', validateTokenMiddleware, postController.updatePost)
  .delete('/:postId', validateTokenMiddleware, postController.deletePost)

export default postRouter
