import mysql from "mysql"



// Configuration de la connexion à la base de données MySQL en utilisant les variables d'environnement
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"jebossela",
  database:"social"
});