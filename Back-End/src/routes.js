import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProcessController from './app/controllers/ProcessController';
import ProgressController from './app/controllers/ProgressCrontroller';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/create/user', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/create/process', ProcessController.store);
routes.get('/my/processes', ProcessController.index);

routes.post('/create/progress', ProgressController.store);
// routes.get('/my/processes', ProcessController.index);

export default routes;
