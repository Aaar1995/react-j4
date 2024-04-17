import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import "./style.scss";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <div>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
      <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={togglePasswordVisibility}>{showPassword ? "Hide Password" : "Show Password"}</button>
      <button onClick={join}>Join</button>
    </div>
  );
};

export default Login;
