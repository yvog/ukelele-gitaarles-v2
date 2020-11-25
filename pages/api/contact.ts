export default function handler(req, res) {

    res.setHeader('Content-Type', 'application/json')
  
    if (req.method === 'POST') {
     //
      res.statusCode = 200
    } else {
      res.statusCode = 403
    }
  
    res.end()
  }