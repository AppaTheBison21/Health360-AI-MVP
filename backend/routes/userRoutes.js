import express from 'express';
import passport from 'passport';
import { register, login } from '../controllers/userController.js';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/'); // TODO: send token
});
router.get('/auth/apple', passport.authenticate('apple'));
router.post('/auth/apple/callback', passport.authenticate('apple'), (req, res) => {
  res.redirect('/'); // TODO: send token
});
export default router;