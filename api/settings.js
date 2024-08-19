export default function handler(req, res) {
    // CORS başlıklarını ekleyin
    res.setHeader('Access-Control-Allow-Origin', '*'); // Tüm kaynaklara izin ver
    res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS'); // İzin verilen HTTP yöntemleri
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // İzin verilen başlıklar
  
    // OPTIONS isteğini hemen yanıtla (CORS preflight için)
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    // Veri modelinizi oluşturun
    let settings = {
      id: 1,
      status: 1
    };
  
    // PATCH isteğiyle status güncelleyebiliriz
    if (req.method === 'PATCH') {
      const { status } = req.body; // İstekten gelen status değeri
      if (status !== undefined) {
        settings.status = status; // Gelen status değeriyle güncelle
        res.status(200).json(settings); // Güncellenmiş veriyi döndür
      } else {
        res.status(400).json({ error: 'Invalid status' }); // Status geçerli değilse hata ver
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
  