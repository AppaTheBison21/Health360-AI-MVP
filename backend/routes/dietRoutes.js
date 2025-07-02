import express from 'express';
import { analyzeMeal } from '../controllers/dietController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware);
router.post('/analyze', analyzeMeal);
export default router;