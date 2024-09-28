import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Books.css";

function Books() {
  const books = [
    {
      title: "El principito",
      content: "El principito es una obra literaria del escritor y aviador francés Antoine de Saint-Exupéry, que cuenta la historia de un pequeño príncipe proveniente de un pequeño asteroide, que visita otros planetas y conoce a sus peculiares habitantes.",
      image: "https://placehold.co/600x400",
      id: "1"
    },
    {
      title: "Cien años de soledad",
      content: "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.",
      image: "https://placehold.co/600x400",
      id: "2"
    },
    {
      title: "Don Quijote de la Mancha",
      content: "Don Quijote de la Mancha es una novela escrita por Miguel de Cervantes, que relata las aventuras de un hidalgo que se vuelve loco tras leer novelas de caballería y decide convertirse en caballero andante.",
      image: "https://placehold.co/600x400",
      id: "3"
    },
    {
      title: "Orgullo y prejuicio",
      content: "Orgullo y prejuicio es una novela de Jane Austen que explora las costumbres y relaciones sociales de la Inglaterra del siglo XIX, centrándose en la historia de amor entre Elizabeth Bennet y Fitzwilliam Darcy.",
      image: "https://placehold.co/600x400",
      id: "4"
    },
    {
      title: "1984",
      content: "1984 es una novela distópica escrita por George Orwell, que presenta una sociedad totalitaria donde el estado ejerce un control absoluto sobre la vida de los ciudadanos y su pensamiento.",
      image: "https://placehold.co/600x400",
      id: "5"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="books-container">

        <h2 className="books-title">Libros que te pueden gustar</h2>
        <div className="books-list">
          {
            books.map((book) => (
              <Card
                key={book.title}
                title={book.title}
                content={book.content}
                image={book.image}
                id={book.id}
              />
            ))
          }
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Books;
