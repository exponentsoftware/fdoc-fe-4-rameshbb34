import "./App.css";
import Album from "./Album";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAlbum from "./Addalbum";
import Navbar from "./Navbar";
import Home from "./Home";
import Songs from "./Songs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/albums" exact component={Album} />
            <Route path="/form" component={AddAlbum} />
            <Route path="/albums/songs/:id" exact component={Songs} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;