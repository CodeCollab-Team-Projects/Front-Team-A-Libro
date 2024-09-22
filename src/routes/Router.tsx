import { BrowserRouter as AppRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Register from '../pages/Register.tsx';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Books from '../pages/Books';
import BookDetail from '../pages/BookDetail.tsx';
import LikedBooks from '../pages/LikedBooks';
import ReadBooks from '../pages/ReadBooks';
import DislikedBooks from '../pages/DislikedBooks';
import Discover from '../pages/Discover';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoutes.tsx';
import PublicRoute from './PublicRoutes.tsx';

function Router() {
  return (
    <AppRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/register" element={<PublicRoute element={<Register />} />} />

        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/discover" element={<Discover />} />

        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/profile/edit" element={<PrivateRoute element={<EditProfile />} />} />
        <Route path="/books/liked" element={<PrivateRoute element={<LikedBooks />} />} />
        <Route path="/books/read" element={<PrivateRoute element={<ReadBooks />} />} />
        <Route path="/books/disliked" element={<PrivateRoute element={<DislikedBooks />} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppRouter>
  );
}

export default Router;
