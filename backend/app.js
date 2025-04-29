// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import newsRoutes from './routes/news.js';

const app = express();
app.use(express.json());
app.use('/api/news', newsRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(err => console.error(err));
