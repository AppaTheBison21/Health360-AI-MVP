import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export default async function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id);
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
}