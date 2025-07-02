import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {
  getPlan,
  analyzeVideoFrame,
  getWearablesData,
} from '../controllers/trainingController.js';

const router = express.Router();
router.use(authMiddleware);

// GET /api/training/plan
router.get('/plan', getPlan);

// POST /api/training/video
// expects { frameBase64: string }
router.post('/video', analyzeVideoFrame);

// GET /api/training/wearables
router.get('/wearables', getWearablesData);

export default router;
