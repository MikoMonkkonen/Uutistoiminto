// azureBlob.js
console.log("AZURE_STORAGE_CONNECTION_STRING:", process.env.AZURE_STORAGE_CONNECTION_STRING);

import { BlobServiceClient } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config()

const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = "news-images";

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(containerName);

export async function uploadToAzureBlob(file) {
    const blobName = `${Date.now()}-${file.originalname}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: { blobContentType: file.mimetype }
    });
    return blockBlobClient.url; // Return the image URL
}

