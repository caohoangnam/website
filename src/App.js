import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/Shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'

class App extends Component {
  render() {
    return <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
      </Switch>
    </div>;
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
