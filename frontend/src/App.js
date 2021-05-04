import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  CartScreen from './screens/CartScreen'
import  ProductScreen from './screens/ProductScreen'
import  HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <MyNavbar/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/products/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
