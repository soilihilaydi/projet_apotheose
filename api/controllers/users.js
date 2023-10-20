import { db } from "../connect.js";



export const getUser = (req, res) => {
  // Votre logique pour récupérer un utilisateur
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    
    if (data && data.length > 0) {
      const { password, ...info } = data[0];
      return res.json(info);
    } else {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  });
};
