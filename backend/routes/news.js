// routes/news.js
import express from 'express';
import multer from 'multer';
import { uploadNews } from '../controllers/newsController.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), uploadNews);

export default router;
