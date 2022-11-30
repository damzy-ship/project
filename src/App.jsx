import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/Product";
import Register from "./pages/Register";
import SavedProductsPage from "./pages/SavedProductsPage";
import Account from "./pages/Account";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/category/:categoryId" element={<CategoryPage />} />
        <Route exact path="/product/:productId" element={<ProductPage />} />
        <Route exact path="/:useId/saved" element={<SavedProductsPage />} />
        <Route exact path="/:useId/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
