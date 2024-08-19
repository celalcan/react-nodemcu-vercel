export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    let settings = {
      id: 1,
      status: 1
    };
  
    if (req.method === 'PATCH') {
      const { status } = req.body;
      if (typeof status === 'number') {
        settings.status = status;
        return res.status(200).json(settings);
      } else {
        return res.status(400).json({ error: 'Invalid status value' });
      }
    }
  
    return res.status(200).json(settings);
  }
  