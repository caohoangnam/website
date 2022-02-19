import React from 'react';

import {
    SignInContainer,
    SignInTitle,
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
            </SignInContainer>
        );
    }
}

export default SignIn;
