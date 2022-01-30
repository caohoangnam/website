import React from 'react';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {
    render() {}
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview //EDITED
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
