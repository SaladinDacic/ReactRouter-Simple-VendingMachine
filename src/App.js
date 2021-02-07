import VendingMachine from "./VendingMachine";
import {Switch, NavLink, Route} from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <navbar>
          <NavLink exact className="nav-text VM" activeClassName="active-nav" to="/">Vending Machine</NavLink>
          <NavLink exact className="nav-text" activeClassName="active-nav" to="/soda">Soda</NavLink>
          <NavLink exact className="nav-text" activeClassName="active-nav" to="/chips">Chips</NavLink>
          <NavLink exact className="nav-text" activeClassName="active-nav" to="/freshsardines">Fresh Sardines</NavLink>
        </navbar>
      </nav>
      <Switch>
        <Route exact path="/" render={()=><VendingMachine/>}/>
        <Route exact path="/soda" component={Soda}/>
        <Route exact path="/chips" render={()=><Chips/>}/>
        <Route exact path="/freshsardines" component={FreshSardines}/>
      </Switch>
    </div>
  );
}

export default App;
