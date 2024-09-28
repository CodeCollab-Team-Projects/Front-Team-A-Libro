import { useNavigate } from "react-router-dom";
import "./Card.css";

interface CardProps {
  id: string;
  title: string;
  content: string;
  image: string;
  key: string;
}

function Card({
  id,
  title,
  content,
  image,
  key
}: CardProps) {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/books/${id}`);

  const maxTitleLength = 20;
  const maxContentLength = 100;

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="card" key={key}>
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card__header">
        <h2 className="card__title">{truncateText(title, maxTitleLength)}</h2>
      </div>
      <div className="card__body">
        <p className="card__content">{truncateText(content, maxContentLength)}</p>
      </div>
      <div>
        <button className="card__button" onClick={handleNavigate}>Ver más</button>
      </div>
    </div>
  );
}

export default Card;
