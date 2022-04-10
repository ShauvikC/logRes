import {Router} from 'express';
import userController from '../controller/userController.js'
const router  = Router();

router.post('/register',userController.setData);
router.post('/login',userController.checkData);

export default router