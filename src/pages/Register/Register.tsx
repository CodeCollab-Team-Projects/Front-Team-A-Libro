import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <div className="register__logo">
        <img
          src="https://i.ibb.co/5K6zzk9/open-book-line-icon-illustration-vector-removebg-preview-1.png"
          alt="Register Logo"
        />
      </div>
      <form className="register__form">
        <h1 className="register__title">BookCheck</h1>
        <h2 className="register__subtitle">¡Crea tu cuenta!</h2>

        <div className="register__input-container">
          <label htmlFor="username" className="register__label">Usuario</label>
          <input
            type="text"
            id="username"
            className="register__input"
            placeholder="Nombre de usuario"
            required
          />
        </div>

        <div className="register__input-container">
          <label htmlFor="email" className="register__label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="register__input"
            placeholder="Correo electrónico"
            required
          />
        </div>

        <div className="register__input-container">
          <label htmlFor="password" className="register__label">Contraseña</label>
          <input
            type="password"
            id="password"
            className="register__input"
            placeholder="Contraseña"
            required
          />
        </div>

        <div className="register__input-container">
          <label htmlFor="confirm-password" className="register__label">Repetir contraseña</label>
          <input
            type="password"
            id="confirm-password"
            className="register__input"
            placeholder="Repetir contraseña"
            required
          />
        </div>

        <button type="submit" className="register__button">Registrarse</button>

        <p className="register__login-text">
          ¿Ya tienes cuenta? <Link to="/login" className="register__login-link">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
