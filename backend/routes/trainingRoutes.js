import express from 'express';
import { getPlan } from '../controllers/trainingController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware);
router.get('/plan', getPlan);
export default router;