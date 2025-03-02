import { Router } from 'express'

import jobController from '@/controllers/jobController'
import validateTokenMiddleware from '@/middleware/validateTokenMiddleware'

const jobRouter = Router()

jobRouter
  .get('/published', jobController.getPublishedJobs)
  .get('/:jobId', jobController.getJob)
  .get('/', jobController.getJobs)
  .post('/', validateTokenMiddleware, jobController.createJob)
  .put('/:jobId', validateTokenMiddleware, jobController.updateJob)
  .delete('/:jobId', validateTokenMiddleware, jobController.deleteJob)

export default jobRouter
