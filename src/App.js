import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-alice-carousel/lib/alice-carousel.css";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Product from './Components/Pages/Product';
// import ProductDetails from './Components/Pages/ProductDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import KidsProduct from './Components/Pages/KidsPage/KidsProduct';
import WomenProduct from './Components/Pages/WomensPage/WomenProduct';
import ManShoes from './Components/Pages/BeautyPage/Beauty';
import Beauty from './Components/Pages/BeautyPage/Beauty';
import { Table } from './Components/Pages/Table';
import Getproductitem from './Components/Pages/Getproductitem';
import Navbar from './Common_1/Navbar';
import { useSelector } from 'react-redux';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/Signin';
// import Navbar from './header/Navbar';
import { selectAuth } from './redux/authSlice';
import ProtectedRoute from './redux/ProtectedRoute';
import Navigation from './Navigation';
import AllProducts from './Components/Pages/AllProducts';
import DropDown from './Components/Pages/DropDown';
// import Login from './Auth/Login';



function App() {
  const { isAuthenticated } = useSelector(selectAuth);
  return (
    <>
      <Router>
        {/* <Navbar />*/}
        <Switch>

          <ProtectedRoute path="/" exact component={Dashboard} />


          <ProtectedRoute path="/kids/item" exact component={KidsProduct} />
          <ProtectedRoute path="/womens/item" exact component={WomenProduct} />
          <ProtectedRoute path="/mens/item" exact component={ManShoes} />
          <ProtectedRoute path="/beauty/item" exact component={Beauty} />
          <Route path="/table" exact component={Table} />
          <ProtectedRoute path="/getproduct" exact component={Getproductitem} />

          <Route path="/productdetails" exact component={Product} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/header" exact component={Navbar} />
          <Route path="/all" exact component={AllProducts} />
          <Route path="/drop" exact component={DropDown} />




        </Switch>
      </Router>
    </>
  );
}

export default App;
