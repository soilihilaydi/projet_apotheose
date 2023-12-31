import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Elektron konnection.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Vous avez un compte?</span>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </div>
        <div className="right">
          <h1>S'enregistrer</h1>
          <form>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nom"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
