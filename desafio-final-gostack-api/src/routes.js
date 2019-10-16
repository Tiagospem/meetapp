import { Router } from 'express'
import multer from 'multer'

import multerconfig from './config/multer'

import auth from './app/middlewares/auth'

import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import FileController from './app/controllers/FileController'
import MeetupController from './app/controllers/MeetupController'
import SubscriptionController from './app/controllers/SubscriptionController'
import OrganizerController from './app/controllers/OrganizerController'

const route = new Router()
const upload = multer(multerconfig)

route.post('/sessions', SessionController.store)
route.post('/users', UserController.store)

route.use(auth)
route.put('/users', UserController.update)

route.post('/files', upload.single('file'), FileController.store)

route.get('/meetups', MeetupController.index)
route.post('/meetups', MeetupController.store)
route.get('/meetups/:meetup_id', MeetupController.show)
route.put('/meetups/:meetup_id', MeetupController.update)

route.get('/subscriptions', SubscriptionController.index)
route.post('/subscriptions', SubscriptionController.store)
route.get('/subscriptions/:subscription_id', SubscriptionController.show)
route.delete('/subscriptions/:subscription_id', SubscriptionController.delete)

route.get('/organizers', OrganizerController.index)
route.get('/organizers/meetup/:meetup_id', OrganizerController.show)
route.delete('/organizers/meetup/:meetup_id', OrganizerController.delete)

export default route
