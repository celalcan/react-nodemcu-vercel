export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS başlığı
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS'); // İzin verilen HTTP yöntemleri
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // İzin verilen başlıklar
  
    if (req.method === 'OPTIONS') {
      // OPTIONS isteği için hızlı yanıt
      res.status(200).end();
      return;
    }
  
    // Basit bir veri modeli
    let settings = {
      id: 1,
      status: 1
    };
  
    if (req.method === 'PATCH') {
      const { status } = req.body; // İstekten gelen status değeri
      if (typeof status === 'number') {
        settings.status = status; // Gelen status değeriyle güncelle
        res.status(200).json(settings); // Güncellenmiş veriyi döndür
      } else {
        res.status(400).json({ error: 'Invalid status value' }); // Hatalı status değeri
      }
    } else if (req.method === 'GET') {
      // GET isteği için veriyi döndür
      res.status(200).json(settings);
    } else {
      // Diğer HTTP yöntemlerini engelle
      res.setHeader('Allow', ['GET', 'PATCH', 'OPTIONS']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  