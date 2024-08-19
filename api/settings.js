export default function handler(req, res) {
    // CORS başlıklarını ekleyin
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm kaynaklara izin ver
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS'); // İzin verilen HTTP yöntemleri
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // İzin verilen başlıklar
  
    // Preflight isteği ise
    if (req.method === 'OPTIONS') {
      res.status(200).end(); // Hızlıca 200 ile yanıt verin
      return;
    }
  
    const settings = {
      id: 1,
      status: 1
    };
  
    // PATCH isteği işleme
    if (req.method === 'PATCH') {
      const { status } = req.body;
      settings.status = status; // Status güncellenir
      res.status(200).json(settings);
    } else if (req.method === 'GET') {
      res.status(200).json(settings);
    } else {
      res.setHeader('Allow', ['GET', 'PATCH', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  