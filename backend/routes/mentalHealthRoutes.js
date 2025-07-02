import express from 'express';
import { chat } from '../controllers/mentalHealthController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware);
router.post('/chat', chat);
export default router;