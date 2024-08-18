// /api/settings.js
export default function handler(req, res) {
    const settings = {
      id: 1,
      status: 1
    };
  
    res.status(200).json(settings);
  }