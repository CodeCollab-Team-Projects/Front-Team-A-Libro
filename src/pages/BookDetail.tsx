import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Book Detail - ID: {id}</h1>
    </div>
  );
}

export default BookDetail;
