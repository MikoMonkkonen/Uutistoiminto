// models/News.js
import mongoose from 'mongoose';

const contentItemSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['markdown', 'image', 'link'],
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: [contentItemSchema],
        required: true
    }
});

const News = mongoose.model('News', newsSchema);
export default News;
