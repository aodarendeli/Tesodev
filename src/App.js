import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistedStore } from './redux/stores/store'
import { PersistGate } from 'redux-persist/integration/react'
import Ozgur from './ozgur'
import Home from './components/home/home'
import Result from './components/result/result';
import Button from './components/button/button'
import Detailsearch from './components/detailsearch/detailsearch'
export default()=> {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/result' component={Result} />
          <Route exact path='/button' component={Button} />
          <Route exact path='/detailsearch' component={Detailsearch} />
          <Route exact path='/ozgur' component={Ozgur} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
  );
}

