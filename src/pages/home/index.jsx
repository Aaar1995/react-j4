import { useState } from "react";
import { ROUTES } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const goToRegisterPage = () => {
    navigate(ROUTES.register);
  };

  const join = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.login === login && userData.password === password) {
      alert("Success, you have logged in!");
      navigate(ROUTES.home);
    } else {
      alert("Error, incorrect login or password.");
    }
  };

  return (
    <main>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={goToRegisterPage}>Register</button>
      <button onClick={join}>Join</button>
      <Link to="https://google.com" target="_blank">google</Link>
    </main>
  );
};

export default Home;
