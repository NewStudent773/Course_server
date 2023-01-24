import { Router } from 'express';
import { getAll, blocked, unblocked, removeUser } from '../controllers/users.js';

const router = new Router();

//Get All Users
router.get('/', getAll);

router.post('/blocked', blocked);

router.post('/unblocked', unblocked);

router.delete('/delete', removeUser);

export default router;