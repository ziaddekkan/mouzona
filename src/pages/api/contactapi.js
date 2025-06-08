// pages/api/contactapi.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, tel, message } = req.body;

    // Validation basique
    if (!name || !email || !tel || !message) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }

    // Simule un envoi d'email ou autre traitement
    console.log("Données reçues : ", req.body);

    // Retourner une réponse au frontend
    return res.status(200).json({ message: "Merci pour votre message, nous reviendrons vers vous bientôt." });
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
