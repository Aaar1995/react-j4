import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import "./style.scss";

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInput = () => {
    setError(""); 

   
    if (!login || !email || !phone || !password || !confirmPassword) {
      setError("Пожалуйста, заполните все поля.");
      return false;
    }

    if (!/^[a-zA-Z]+$/.test(login)) {
      setError("Логин должен быть на латинице.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Пожалуйста, введите действительный адрес электронной почты.");
      return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      setError("Пароль должен быть буквенно-цифровым.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают.");
      return false;
    }

    return true;
  };

  const completeRegistration = () => {
    if (validateInput()) {
      const userData = {
        login,
        email,
        phone,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      navigate(ROUTES.home);
    }
  };

  return (
    <div>
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button onClick={togglePasswordVisibility}>{showPassword ? "Hide Password" : "Show Password"}</button>
      <button onClick={completeRegistration}>Complete Registration</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
