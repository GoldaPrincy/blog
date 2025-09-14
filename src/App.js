import React from "react" 
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import {Header} from "./components/header/Header"
import {Details} from "./pages/home/details/Details"
import {Home} from "./pages/home/Home"
import { Account } from "./pages/home/account/Account"
import { Login } from "./pages/home/login/Login"
import { Register } from "./pages/home/login/Register"
import { Create } from "./components/header/create/Create"
import {Footer} from "./components/header/footer/Footer"
import {Contact} from "./pages/home/contact/Contact"



const App = () => {
  return (
  <>
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
       <Route exact path='/details/:id' component={Details} />
       <Route exact path='/account' component={Account} />
       <Route exact path='/login' component={Login} />
       <Route exact path='/register' component={Register} />
       <Route exact path='/create' component={Create} />
       <Route exact path='/contact' component={Contact} />
    </Switch>
    <Footer />
  </Router>
  </>
  )
}
export default App