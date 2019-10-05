import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path, mimetype } = req.file;

    if (!mimetype.includes('image'))
      return res.status(401).json({ error: 'Only images are allowed' });

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
