// /api/settings.js

// Bellekte bir veri kaynağı oluşturun (örnek veri)
let settings = {
    1: { status: 1 }
  };
  
  export default function handler(req, res) {
    const { method } = req;
    const { id } = req.query; // URL'den gelen id parametresi
    const { status } = req.body; // PATCH isteğinde gönderilen veri
  
    if (method === 'PATCH') {
      // Eğer gelen id verisi mevcutsa güncelle
      if (settings[id]) {
        settings[id].status = status;
        res.status(200).json(settings[id]);
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    } else if (method === 'GET') {
      // GET isteği ile mevcut veriyi döndür
      if (settings[id]) {
        res.status(200).json(settings[id]);
      } else {
        res.status(404).json({ message: 'Not Found' });
      }
    } else {
      // Desteklenmeyen HTTP yöntemleri için hata yanıtı
      res.setHeader('Allow', ['PATCH', 'GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  