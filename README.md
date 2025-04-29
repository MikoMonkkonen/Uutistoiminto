# News Management App 📰

This is a full-stack React + Node.js app for creating and managing news posts with markdown support, image uploads, and live previews.

## ✨ Features

- Create and submit news articles using a React form
- Live Markdown preview while typing
- Upload images to Azure Blob Storage
- Store news content (text, image URLs, links) in MongoDB
- View or manage submitted news (future feature)

---

## 📦 Folder Structure

/frontend # React app (user interface) /backend # Express API (handles image uploads & news saving)

yaml
Copy
Edit

---

## 🛠️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
2. Setup the Backend

cd backend

npm install

Create a .env file in /backend with:

AZURE_STORAGE_CONNECTION_STRING=YourAzureBlobConnectionString
MONGO_URI=YourMongoDBConnectionURI
Start the backend:

npm run dev

The backend will run on http://localhost:3001

3. Setup the Frontend
cd ../frontend
npm install
npm run dev
The frontend will run on http://localhost:5173 (or similar)

📝 Usage
Fill out the news form: enter a title, content (in Markdown), and optionally upload images or add links.

Live preview updates in real-time as you type.

On submit, the news post is stored in MongoDB with image links saved in Azure Blob Storage.

💡 Tech Stack
Frontend: React, Vite, React Markdown

Backend: Node.js, Express, Mongoose

Storage: Azure Blob Storage

Database: MongoDB

🔐 Security
.env is excluded via .gitignore

Never commit sensitive keys like Azure or MongoDB credentials