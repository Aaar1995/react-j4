import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <main>
      <h1>Добро пожаловать на наш сайт!</h1>
      <p>Это платформа для обмена знаниями, где пользователи могут задавать вопросы и получать ответы от сообщества. Здесь вы можете найти ответы на свои вопросы, поделиться своими знаниями и узнать что-то новое.</p>
      <p>Чтобы начать, пожалуйста, <Link to="/register">зарегистрируйтесь</Link> или <Link to="/login">войдите</Link> в свой аккаунт.</p>
      <Link to="https://google.com" target="_blank">google</Link>
    </main>
  );
};

export default Home;
