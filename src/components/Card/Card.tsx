import "./Card.css"

interface CardProps {
  title: string;
  content: string;
  image: string;
}

function Card({
  title,
  content,
  image,
}: CardProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
      </div>
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card__body">
        <p className="card__content">{content}</p>
      </div>
    </div>
  )
}

export default Card;
