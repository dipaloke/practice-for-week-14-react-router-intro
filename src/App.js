import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;