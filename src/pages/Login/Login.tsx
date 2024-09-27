import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://i.ibb.co/5K6zzk9/open-book-line-icon-illustration-vector-removebg-preview-1.png"
          alt="Login Logo"
        />
      </div>
      <form className="login__form">
        <h1 className="login__title">BookCheck</h1>
        <h2 className="login__subtitle">¡Bienvenido de nuevo!</h2>

        <div className="login__input-container">
          <label htmlFor="email" className="login__label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="login__input"
            placeholder="Correo electrónico"
          />
        </div>

        <div className="login__input-container">
          <label htmlFor="password" className="login__label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="login__input"
            placeholder="Contraseña"
          />
        </div>

        <button type="submit" className="login__button">Iniciar sesión</button>

        <p className="login__register-text">
          ¿No tienes cuenta? <Link to="/register" className="login__register-link">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
