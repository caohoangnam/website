import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import Homepage from 'pages/homepage/homepage.component'
import Header from 'components/header/header.component'
import Footer from 'components/footer/footer.component'

class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>;
  }
}

export default App;
