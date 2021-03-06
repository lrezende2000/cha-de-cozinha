import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Raffle from './pages/Raffle';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/raffle" component={Raffle} />
      </Switch>
    </BrowserRouter>
  );
}