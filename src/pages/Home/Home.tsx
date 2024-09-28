import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCallToAction = () => {
    navigate('/login');
  };

  useEffect(() => {
    const hero = document.querySelector('.home__hero');

    gsap.to(hero, {
      height: '30vh',
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="home__hero">
        <img
          src="https://i.ibb.co/bs3Z7x7/thumb-1920-1326370.png"
          alt="Hero image of reading books"
          className="home__hero-image"
        />
      </div>

      <div className="home__logo-container">
        <img src="https://i.ibb.co/5K6zzk9/open-book-line-icon-illustration-vector-removebg-preview-1.png" alt="BookCheck Logo" className="home__logo" />
        <h1 className="home__title">BookCheck</h1>
      </div>

      <div className="home__description">
        <div>
          <h3>¡Descubre tu próxima lectura <span className="paralelogramo">favorita!</span></h3>
          <p>
            Explora recomendaciones personalizadas basadas en tus intereses. Encuentra libros que te encantarán y mantén un registro de tus lecturas. ¿Te interesa un libro? ¡Márcalo y recibe más sugerencias como este! No te convence una recomendación, simplemente descártala.
          </p>
        </div>
        <div>
          <h3>Tu biblioteca, <span className="paralelogramo">tus reglas.</span></h3>
          <p>
            Regístrate y comienza a descubrir los libros perfectos para ti. ¡No te pierdas la oportunidad de explorar el mundo literario de manera inteligente y personalizada!
          </p>
        </div>
        <h4>
          Únete ahora y empieza a disfrutar de tus lecturas personalizadas.
        </h4>
      </div>

      <div className="home__carousel">
        <Carousel />
      </div>

      <div className="home__cta">
        <button className="home__cta-button" onClick={handleCallToAction}>
          ¡Empieza a descubrir ahora!
        </button>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Home;
