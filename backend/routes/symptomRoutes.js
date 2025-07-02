import express from 'express';
import { checkSymptoms } from '../controllers/symptomController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();
router.use(authMiddleware);
router.post('/check', checkSymptoms);
export default router;