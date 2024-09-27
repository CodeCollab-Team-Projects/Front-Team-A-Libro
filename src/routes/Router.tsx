import React, { Suspense } from 'react';
import { BrowserRouter as AppRouter, Routes, Route } from 'react-router-dom';

// Lazy load de los componentes
const Login = React.lazy(() => import('../pages/Login/Login.tsx'));
const Register = React.lazy(() => import('../pages/Register/Register.tsx'));
const Profile = React.lazy(() => import('../pages/Profile/Profile.tsx'));
const EditProfile = React.lazy(() => import('../pages/EditProfile/EditProfile.tsx'));
const Books = React.lazy(() => import('../pages/Books/Books.tsx'));
const BookDetail = React.lazy(() => import('../pages/BookDetail/BookDetail.tsx'));
const LikedBooks = React.lazy(() => import('../pages/LikedBooks/LikedBooks.tsx'));
const ReadBooks = React.lazy(() => import('../pages/ReadBooks/ReadBooks.tsx'));
const DislikedBooks = React.lazy(() => import('../pages/DislikedBooks/DislikedBooks.tsx'));
const Discover = React.lazy(() => import('../pages/Discover/Discover.tsx'));
const Home = React.lazy(() => import('../pages/Home/Home.tsx'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound.tsx'));
const PrivateRoute = React.lazy(() => import('../routes/PrivateRoutes.tsx'));
const PublicRoute = React.lazy(() => import('../routes/PublicRoutes.tsx'));

function Router() {
  return (
    <AppRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />

          {/* Ruta principal */}
          <Route path="/" element={<Home />} />

          {/* Rutas privadas */}
          <Route path="/books" element={<PrivateRoute element={<Books />} />} />
          <Route path="/books/:id" element={<PrivateRoute element={<BookDetail />} />} />
          <Route path="/discover" element={<PrivateRoute element={<Discover />} />} />

          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/profile/edit" element={<PrivateRoute element={<EditProfile />} />} />
          <Route path="/books/liked" element={<PrivateRoute element={<LikedBooks />} />} />
          <Route path="/books/read" element={<PrivateRoute element={<ReadBooks />} />} />
          <Route path="/books/disliked" element={<PrivateRoute element={<DislikedBooks />} />} />

          {/* Ruta de no encontrado */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppRouter>
  );
}

export default Router;
