export default function handler(req, res) {
    // CORS başlıklarını ekleyin
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm kaynaklara izin ver
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS'); // İzin verilen yöntemler
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // OPTIONS isteği olduğunda, hızlıca 200 yanıt gönderin
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    const settings = {
      id: 1,
      status: 1
    };
  
    // Diğer HTTP yöntemlerini işleyin
    if (req.method === 'PATCH') {
      const { status } = req.body;
      settings.status = status; // Burada `status` alanını güncelleyin
      res.status(200).json(settings);
    } else if (req.method === 'GET') {
      res.status(200).json(settings);
    } else {
      res.setHeader('Allow', ['GET', 'PATCH', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  