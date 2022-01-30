import React from 'react';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    render() {
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
            </SignUpContainer>
        );
    }
}

export default SignUp;
