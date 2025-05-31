import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CategoryPage from '../pages/CategoryPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import CheckoutPage from '../pages/CheckoutPage';
import FavoritesPage from '../pages/FavoritesPage';
import SellerDashboardPage from '../pages/SellerDashboardPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/produto/:id" element={<Layout><ProductPage /></Layout>} />
      <Route path="/categorias/:category" element={<Layout><CategoryPage /></Layout>} />
      <Route path="/carrinho" element={<Layout><CartPage /></Layout>} />
      <Route path="/login" element={<Layout><LoginPage /></Layout>} />
      <Route path="/cadastro" element={<Layout><RegisterPage /></Layout>} />
      <Route path="/perfil" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
      <Route path="/favoritos" element={<Layout><FavoritesPage /></Layout>} />
      <Route path="/vender" element={<Layout><SellerDashboardPage /></Layout>} />
      <Route path="/sobre" element={<Layout><AboutPage /></Layout>} />
      <Route path="/contato" element={<Layout><ContactPage /></Layout>} />
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
