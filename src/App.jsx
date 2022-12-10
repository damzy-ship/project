import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/Product";
import Register from "./pages/Register";
import SavedProductsPage from "./pages/SavedProductsPage";
import Account from "./pages/Account";
import history from "./history"

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes history={history}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/category/:categoryId" element={<CategoryPage />} />
        <Route exact path="/product/:productId" element={<ProductPage />} />
        <Route exact path="/:userId/saved" element={<SavedProductsPage />} />
        <Route exact path="/:userId/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
