// controllers/newsController.js
import News from '../models/News.js';
import { uploadToAzureBlob } from '../azureBlob.js';

export async function uploadNews(req, res) {
    try {
        const { title, markdown, link } = req.body;
        const content = [];

        if (markdown) content.push({ type: 'markdown', value: markdown });
        if (link) content.push({ type: 'link', value: link });

        if (req.file) {
            const imageUrl = await uploadToAzureBlob(req.file);
            content.push({ type: 'image', value: imageUrl });
        }

        const newsItem = new News({ title, content });
        await newsItem.save();
        res.status(201).json(newsItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload news' });
    }
}

