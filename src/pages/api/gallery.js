// pages/api/gallery.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // __dirname points to /pages/api, so we go up to the root
  const imagesDir = path.join(process.cwd(), 'public', 'images');

  try {
    const files = fs.readdirSync(imagesDir);
    const images = files.filter(file =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read images folder' });
  }
}
