import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin/Layout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import ShoppingLayout from "./components/shopping/ShoppingLayout";
import NotFound from "./components/not-found";
import Account from "./pages/shopping/Account";
import Checkout from "./pages/shopping/Checkout";
import Home from "./pages/shopping/Home";
import Listing from "./pages/shopping/Listing";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="home" element={<Home />} />
          <Route path="listing" element={<Listing />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
